import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user.model";
import { connect } from "@/config/dbConfig";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const { email, password } = reqBody;

    //   check if user exists
    const user = await User.findOne({ email });

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const isPasswordMatch = await bcryptjs.compare(password, user.password);

    if (!isPasswordMatch)
      return NextResponse.json(
        { error: "Password does not match" },
        { status: 400 }
      );

    const tokenData = {
      userID: user._id,
      username: user.username,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_KEY!, {
      expiresIn: "3d",
    });

    const response = NextResponse.json({
      message: "Login successfully",
      success: true,
      user,
      token,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error : any) {
    console.log("error in login ", error);
    return NextResponse.json(
      { error: error.message, message: "Login error" },
      { status: 500 }
    );
  }
}
