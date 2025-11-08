import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()

    // Use the .env variable or fallback
    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL

    const endpoint = `${baseURL}/api/livo-foundation/contact-us`

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    const contentType = response.headers.get("content-type") || ""
    if (!contentType.includes("application/json")) {
      const text = await response.text()
      console.error("Contact API returned non-JSON:", text)
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      )
    }

    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Proxy contact error:", error)
    return NextResponse.json(
      { error: "Failed to forward request. Please try again." },
      { status: 500 }
    )
  }
}
