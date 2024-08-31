import { NextResponse } from "next/server";

export async function GET(request, content) {
  const userdata = content.params.student;
  // console.log(userdata);
  return NextResponse.json({ result: userdata }, { status: 200 });
}
