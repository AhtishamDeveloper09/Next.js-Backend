import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request) {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  const payload = await request.json();
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "required feild not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "new user created", success: true },
    { status: 200 }
  );
}
