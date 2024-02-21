import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Logout successfully",
    });
    console.log("logging out");

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error:any) {
    console.log("error in logout ", error);
    return NextResponse.json(
      { message: "Can`t able to logout", error },
      { status: 500 }
    );
  }
}
