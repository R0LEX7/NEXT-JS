import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/user.model";
import { connect } from "@/config/dbConfig";

connect();

export async function GET(req: NextRequest) {
  try {
    const _id: string = await getDataFromToken(req);
    const user = await User.findById(_id).select(
      "-password -isVerified -isAdmin"
    );
    return NextResponse.json(
      {
        success: true,
        user,
        message: "user profile ",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in Profile route ", error);
    return NextResponse.json({
      message: "error occurred",
      error: error.message,
    });
  }
}
