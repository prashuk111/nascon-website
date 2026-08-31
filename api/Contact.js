/* global process */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      company,
      phone,
      email,
      requirement,
    } = req.body;

    if (!name || !email || !requirement) {
      return res.status(400).json({
        message: "Name, email and requirement are required.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Nascon Website <onboarding@resend.dev>",
      to: ["Nishit@nascon.in"],
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <h2>New Business Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Requirement</h3>
        <p>${requirement}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        message: "Failed to send enquiry.",
      });
    }

    return res.status(200).json({
      message: "Enquiry sent successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
}