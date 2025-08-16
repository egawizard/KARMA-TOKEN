import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>🚧 Under Maintenance</title>
      <style>
        body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: sans-serif;
          background: #0f172a;
          color: #f8fafc;
          text-align: center;
        }
        h1 { font-size: 2rem; margin-bottom: 1rem; }
        p { opacity: 0.8; }
      </style>
    </head>
    <body>
      <h1>🚧 We'll be back soon 🚧</h1>
      <p>Our website is currently under maintenance.<br/>Please check back later.</p>
    </body>
    </html>
  `;

  return new NextResponse(html, {
    status: 503, // Service Unavailable
    headers: {
      "content-type": "text/html",
    },
  });
}
