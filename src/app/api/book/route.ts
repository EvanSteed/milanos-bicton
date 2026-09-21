import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, phone, date, time, guests, specialRequests } =
      await req.json();

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Name, email, date, and time are required" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Milano's <onboarding@resend.dev>",
      to: "delivered@resend.dev",
      subject: `Table Booking for ${date} at ${time}`,
      text: `New Table Booking\n\nName: ${name}\nEmail: ${email}\nPhone: ${
        phone || "N/A"
      }\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\n\nSpecial Requests:\n${
        specialRequests || "None"
      }`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send booking" },
      { status: 500 },
    );
  }
}
