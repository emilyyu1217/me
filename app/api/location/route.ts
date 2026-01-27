import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

// GET - fetch current location
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("location")
      .select("city")
      .eq("id", 1)
      .single()

    if (error) throw error

    return NextResponse.json({ city: data?.city || "sf" })
  } catch (error) {
    console.error("Error fetching location:", error)
    return NextResponse.json({ city: "sf" })
  }
}

// POST - update location (password protected)
export async function POST(request: Request) {
  try {
    const { password, city } = await request.json()

    // Use the same admin password as messages
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })
    }

    if (!city || typeof city !== "string") {
      return NextResponse.json({ error: "city is required" }, { status: 400 })
    }

    const { error } = await supabase
      .from("location")
      .update({ city: city.toLowerCase(), updated_at: new Date().toISOString() })
      .eq("id", 1)

    if (error) throw error

    return NextResponse.json({ success: true, city: city.toLowerCase() })
  } catch (error) {
    console.error("Error updating location:", error)
    return NextResponse.json({ error: "failed to update location" }, { status: 500 })
  }
}
