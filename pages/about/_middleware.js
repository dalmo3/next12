import { NextResponse } from 'next/server';

let i = 0;

export function middleware(req) {
  console.log('middleware 2', i++, new Date());

  const res = NextResponse.next();

  return res;
}
