import { NextResponse } from "next/server";
import { blogPosts } from "@blog/content";



export async function GET(request: Request) {
  // TODO block access unless GET from page?
  // console.log(request.url);
  
  return NextResponse.json(blogPosts);
}
