/* global process */

import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return res.status(500).json({
      message: "Server configuration error: RESEND_API_KEY is not configured.",
    });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ message: "Invalid request payload." });
      }
    }
    body = body || {};

    const name = (body.name || "").trim();
    const company = (body.company || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const requirement = (body.requirement || "").trim();

    if (!name || !email || !requirement) {
      return res.status(400).json({
        message: "Name, email and requirement are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please provide a valid email address.",
      });
    }

    if (phone) {
      const cleanPhone = phone.replace(/\D/g, "");
      if (cleanPhone.length < 10 || cleanPhone.length > 15) {
        return res.status(400).json({
          message: "Please provide a valid phone number (at least 10 digits).",
        });
      }
    }

    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Nascon Website <onboarding@resend.dev>";
    const primaryTo = process.env.CONTACT_TO_EMAIL || "Nishit@nascon.in";
    const fallbackTo = process.env.FALLBACK_TO_EMAIL || "prashukjainn3@gmail.com";

    const formattedRequirement = requirement.replace(/\n/g, "<br/>");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="color: #0f172a; margin: 0; font-size: 22px;">New Business Enquiry</h2>
          <p style="color: #64748b; font-size: 13px; margin: 4px 0 0;">Received via Nascon Technologies Website</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 12px; background-color: #f8fafc; font-weight: 600; color: #475569; width: 130px; border: 1px solid #e2e8f0;">Full Name</td>
            <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background-color: #f8fafc; font-weight: 600; color: #475569; border: 1px solid #e2e8f0;">Company</td>
            <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a;">${company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background-color: #f8fafc; font-weight: 600; color: #475569; border: 1px solid #e2e8f0;">Phone</td>
            <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a;">
              ${phone ? `<a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>` : "Not provided"}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; background-color: #f8fafc; font-weight: 600; color: #475569; border: 1px solid #e2e8f0;">Email</td>
            <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a;">
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </td>
          </tr>
        </table>

        <div style="margin-bottom: 24px;">
          <h3 style="color: #0f172a; font-size: 16px; margin: 0 0 8px;">Requirement Details:</h3>
          <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 16px; color: #1e293b; line-height: 1.6; border-radius: 0 6px 6px 0; font-size: 14px;">
            ${formattedRequirement}
          </div>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center;">
          <a href="mailto:${email}?subject=Re:%20Your%20Enquiry%20to%20Nascon%20Technologies" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 10px 20px; font-size: 14px; font-weight: 500; text-decoration: none; border-radius: 6px;">
            Reply to ${name}
          </a>
        </div>
      </div>
    `;

    const emailPayload = {
      from: fromAddress,
      to: [primaryTo],
      replyTo: email,
      subject: `New Website Enquiry from ${name} (${company || "Individual"})`,
      html: htmlContent,
    };

    let { data, error } = await resend.emails.send(emailPayload);

    // If Resend returns sandbox/validation error because custom domain is not yet verified on resend.com,
    // fallback to delivering to the registered account email so the customer enquiry is never lost.
    if (error && (error.statusCode === 403 || error.message?.includes("only send testing emails"))) {
      console.warn("Resend test domain detected; redirecting enquiry to account holder:", fallbackTo);
      const fallbackPayload = {
        ...emailPayload,
        to: [fallbackTo],
        subject: `[Enquiry for Nishit@nascon.in] from ${name} (${company || "Company"})`,
      };
      const fallbackResult = await resend.emails.send(fallbackPayload);
      data = fallbackResult.data;
      error = fallbackResult.error;
    }

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        message: error.message || "Failed to send enquiry.",
      });
    }

    return res.status(200).json({
      message: "Enquiry sent successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      message: error.message || "Something went wrong.",
    });
  }
}