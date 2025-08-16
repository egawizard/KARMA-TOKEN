import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Jangan aktifkan di development (localhost)
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  // Kalau akses ke /_next, /api, atau /static → biarkan jalan
  if (req.nextUrl.pathname.startsWith('/_next')) return NextResponse.next();
  if (req.nextUrl.pathname.startsWith('/api')) return NextResponse.next();
  if (req.nextUrl.pathname.startsWith('/static')) return NextResponse.next();

  // Selain itu tampilkan halaman under maintenance
  return new NextResponse(
    `<!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Under Maintenance</title>
        <style>
          body { display:flex; align-items:center; justify-content:center; height:100vh; font-family:sans-serif; }
          h1 { font-size:2rem; color:#444; }
        </style>
      </head>
      <body>
        <h1>🚧 Site Under Maintenance. Please check back later.</h1>
      </body>
      </html>`,
    {
      status: 503,
      headers: { "content-type": "text/html" }
    }
  );
}
