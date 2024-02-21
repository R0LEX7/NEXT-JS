import { verify , JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = (req: NextRequest) => {
  try {
    const token: string = req.cookies.get("token")?.value || "";

    const data = verify(token, process.env.JWT_KEY!) as JwtPayload;
    if (typeof data === 'object' && 'userID' in data) {
      console.log(data);
      return data.userID;
    } else {
      throw new Error("Invalid token data");
    }
    return data.userID;
  } catch (error: any) {
    console.log("error in getting data from token: " + error.message);
    throw new Error(error.message);
  }
};
