import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
const secretKey = process.env.SECRET_KEY || "emptyStringInCaseOfNullSecretKey";
export const signToken = (payload: object, expiresIn: string = "1h") => {
  try {
    const token = jwt.sign(payload, secretKey, { expiresIn });
    NextResponse.json({ msg: "successfully token issued!!" }).cookies.set(
      "authToken",
      token,
      {
        httpOnly: true, // Makes the cookie accessible only by the web server
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        maxAge: 60 * 60, // 1 hour
        path: "/", // Cookie available throughout the site
      }
    );
  } catch (err) {
    NextResponse.json({ msg: err });
  }
};
