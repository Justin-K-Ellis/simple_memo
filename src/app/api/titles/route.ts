import { NextResponse } from "next/server";
import getAllNoteTitles from "@/app/lib/db/getAllNoteTitles";

export async function GET() {
  const titles = await getAllNoteTitles();
  return NextResponse.json(titles);
}
