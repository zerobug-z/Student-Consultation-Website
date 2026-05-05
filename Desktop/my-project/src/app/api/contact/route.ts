import { NextResponse } from "next/server";
import { transporter } from "@/app/lib/mailer"; // kendi yoluna göre düzelt


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
      <p><b>Ad Soyad:</b> ${fullName}</p>
      <p><b>E-posta:</b> ${email}</p>
      <p><b>Telefon:</b> ${phone || "-"}</p>
      <p><b>Eğitim:</b> ${education || "-"}</p>
      <p><b>Okuduğu Bölüm:</b> ${currentDepartment || "-"}</p>
      <p><b>Hedef Bölüm:</b> ${targetDepartment || "-"}</p>
      <p><b>Mesaj:</b><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
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

