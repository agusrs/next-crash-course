import { NextRequest, NextResponse } from "next/server";
import courses from '../data.json'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')
  return NextResponse.json(courses.filter((course: any) => {
    return course.title.toLowerCase().includes(query?.toLowerCase())
  }))
}
