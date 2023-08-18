import './globals.css';
import Nav from './nav';
import { Suspense } from 'react';

export const metadata = {
  title: 'Focman | Tiktok Dashboard',
  description:
    'A dashboard that offers statistical analysis of user data for advertising on the TikTok platform.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/icon.png" />
      </head>
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
