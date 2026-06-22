import { NextResponse } from "next/server";
import { transporter } from "@/app/lib/mailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      education,
      currentDepartment,
      targetDepartment,
      message,
    } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "fullName, email ve message zorunlu." },
        { status: 400 }
      );
    }

    const html = `
      <h2>Yeni İletişim Formu</h2>
      <p><b>Ad Soyad:</b> ${escapeHtml(fullName)}</p>
      <p><b>E-posta:</b> ${escapeHtml(email)}</p>
      <p><b>Telefon:</b> ${escapeHtml(phone || "-")}</p>
      <p><b>Eğitim:</b> ${escapeHtml(education || "-")}</p>
      <p><b>Okuduğu Bölüm:</b> ${escapeHtml(currentDepartment || "-")}</p>
      <p><b>Hedef Bölüm:</b> ${escapeHtml(targetDepartment || "-")}</p>
      <p><b>Mesaj:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
      replyTo: email,
      subject: `İletişim Formu: ${fullName}`,
      text: `Ad: ${fullName}\nE-posta: ${email}\nTelefon: ${phone}\nEğitim: ${education}\nOkuduğu: ${currentDepartment}\nHedef: ${targetDepartment}\n\nMesaj:\n${message}`,
      html,
    });

    return NextResponse.json({ ok: true, message: "Mail gönderildi" });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { ok: false, error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}

