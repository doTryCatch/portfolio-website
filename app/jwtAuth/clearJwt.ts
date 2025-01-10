import { NextRequest, NextResponse } from "next/server"

export const clearJWT=()=>{
    NextResponse.cookies.delete
}