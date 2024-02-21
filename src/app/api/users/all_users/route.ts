import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user.model";
import { connect } from "@/config/dbConfig";

connect();

export async function GET() {
  try {
    const all_users = await User.find();

    return NextResponse.json(
      {
        success: true,
        data: all_users,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Server error", error);
    return NextResponse.json(
      { error: error.message, message: "Login error" },
      { status: 500 }
    );
  }
}
