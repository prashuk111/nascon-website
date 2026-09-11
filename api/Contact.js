/* global process */

import { Resend } from "resend";
import { randomUUID } from "crypto";

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

    // Handle stringified JSON body
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          message: "Invalid request payload.",
        });
      }
    }

    body = body || {};

    const name = (body.name || "").trim();
    const company = (body.company || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const requirement = (body.requirement || "").trim();

    // Validate required fields
    if (!name || !email || !requirement) {
      return res.status(400).json({
        message: "Name, email and requirement are required.",
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please provide a valid email address.",
      });
    }

    // Validate phone if provided
    if (phone) {
      const cleanPhone = phone.replace(/\D/g, "");

      if (cleanPhone.length < 10 || cleanPhone.length > 15) {
        return res.status(400).json({
          message: "Please provide a valid phone number (at least 10 digits).",
        });
      }
    }

    const resend = new Resend(apiKey);

    /*
     * Production configuration
     *
     * RESEND_FROM_EMAIL should be something like:
     * Nascon Technologies <contact@nascon.in>
     *
     * CONTACT_TO_EMAIL:
     * Nishit@nascon.in
     */
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      "Nascon Technologies <contact@nascon.in>";

    const primaryTo =
      process.env.CONTACT_TO_EMAIL ||
      "Nishit@nascon.in";

    // Escape HTML characters to prevent user-submitted HTML injection
    const escapeHtml = (value) =>
      String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeRequirement = escapeHtml(requirement).replace(/\n/g, "<br/>");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">

        <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="color: #0f172a; margin: 0; font-size: 22px;">
            New Business Enquiry
          </h2>

          <p style="color: #64748b; font-size: 13px; margin: 4px 0 0;">
            Received via Nascon Technologies Website
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">

          <tr>
            <td style="padding: 8px 12px; background-color: #f8fafc; font-weight: 600; color: #475569; width: 130px; border: 1px solid #e2e8f0;">
              Full Name
            </td>

            <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">
              ${safeName}
            </td>
          </tr>

          <tr>
            <td style="padding: 8px 12px; background-color: #f8fafc; font-weight: 600; color: #475569; border: 1px solid #e2e8f0;">
              Company
            </td>

            <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a;">
              ${safeCompany || "Not provided"}
            </td>
          </tr>

          <tr>
            <td style="padding: 8px 12px; background-color: #f8fafc; font-weight: 600; color: #475569; border: 1px solid #e2e8f0;">
              Phone
            </td>

            <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a;">
              ${safePhone
        ? `<a href="tel:${safePhone}" style="color: #2563eb; text-decoration: none;">${safePhone}</a>`
        : "Not provided"
      }
            </td>
          </tr>

          <tr>
            <td style="padding: 8px 12px; background-color: #f8fafc; font-weight: 600; color: #475569; border: 1px solid #e2e8f0;">
              Email
            </td>

            <td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a;">
              <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">
                ${safeEmail}
              </a>
            </td>
          </tr>

        </table>

        <div style="margin-bottom: 24px;">

          <h3 style="color: #0f172a; font-size: 16px; margin: 0 0 8px;">
            Requirement Details:
          </h3>

          <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 16px; color: #1e293b; line-height: 1.6; border-radius: 0 6px 6px 0; font-size: 14px;">
            ${safeRequirement}
          </div>

        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center;">

          <a
            href="mailto:${safeEmail}?subject=Re:%20Your%20Enquiry%20to%20Nascon%20Technologies"
            style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 10px 20px; font-size: 14px; font-weight: 500; text-decoration: none; border-radius: 6px;"
          >
            Reply to ${safeName}
          </a>

        </div>

      </div>
    `;

    const emailPayload = {
      from: fromAddress,

      // ONLY Nishit's email
      to: [primaryTo],

      // Reply directly to the customer
      replyTo: email,

      subject: `New Website Enquiry from ${name} (${company || "Individual"})`,

      html: htmlContent,
    };

    /*
     * Idempotency
     *
     * The frontend can send a requestId for each genuine form submission.
     * If it doesn't, we generate one so the request still works normally.
     */
    const requestId =
      body.requestId && String(body.requestId).trim()
        ? String(body.requestId).trim()
        : randomUUID();

    const { data, error } = await resend.emails.send(
      emailPayload,
      {
        idempotencyKey: `nascon-contact-${requestId}`,
      }
    );

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        message: error.message || "Failed to send enquiry.",
      });
    }

    console.log("Nascon enquiry email sent successfully:", {
      id: data?.id,
      to: primaryTo,
      from: fromAddress,
    });

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