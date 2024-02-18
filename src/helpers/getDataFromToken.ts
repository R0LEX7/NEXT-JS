import { verify } from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = (req: NextRequest) => {
  try {
    const token: string = req.cookies.get("token")?.value || "";

    const data = verify(token, process.env.JWT_KEY);
    console.log(data);
    return data.userID;
  } catch (error: any) {
    console.log("error in getting data from token: " + error.message);
    throw new Error(error.message);
  }
};
