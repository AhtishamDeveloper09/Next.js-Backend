import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const userdata = user.filter((item) => item.id == content.params.userid);
  return NextResponse.json(
    userdata.length == 0
      ? { result: "Data Not Found", success: false }
      : { result: userdata[0], success: true },
    { status: 200 }
  );
}

export async function PUT(request, content) {
  const payload = await request.json();
  payload.id = content.params.userid;
  // console.log(payload);

  if (!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "data is not valid", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(request, content) {
  let id = content.params.userid;
  if (id) {
    return NextResponse.json(
      { result: "user deleted successfully", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal error, please try after sometime", success: false },
      { status: 400 }
    );
  }
}
