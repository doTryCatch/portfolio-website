import { NextResponse } from "next/server";
import { verifyToken } from "./verifyToken";

export const middleware = async (req: Request) => {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token || !verifyToken(token)) {
    return NextResponse.redirect("/dashboard");
  }
  return NextResponse.next();
};
