import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema, quoteFormSchema } from "@/lib/validations";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { type, ...data } = body;

        // ── Validate ──
        if (type === "contact") {
            const result = contactFormSchema.safeParse(data);
            if (!result.success) {
                return NextResponse.json(
                    { error: "Validation failed", details: result.error.flatten() },
                    { status: 400 }
                );
            }
        } else if (type === "quote") {
            const result = quoteFormSchema.safeParse(data);
            if (!result.success) {
                return NextResponse.json(
                    { error: "Validation failed", details: result.error.flatten() },
                    { status: 400 }
                );
            }
        } else {
            return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
        }

        // ── Send email ──
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const adminEmail = process.env.ADMIN_EMAIL || "admin@digitalwebtek.com";
        const isContact = type === "contact";

        const subject = isContact
            ? `New Contact: ${data.name} — ${data.service}`
            : `New Quote Request: ${data.name} — ${data.projectType}`;

        const htmlBody = isContact
            ? `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
            : `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <p><strong>Description:</strong></p>
        <p>${data.description}</p>
      `;

        await transporter.sendMail({
            from: `"${data.name}" <${process.env.SMTP_USER || "noreply@digitalwebtek.com"}>`,
            to: adminEmail,
            subject,
            html: htmlBody,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
