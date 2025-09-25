import type { Metadata } from "next";
import React from "react";

// The metadata object is used to define the page title and description.
// NOTE: Due to rendering constraints, we cannot directly render <head> elements
// like <title> and <meta> from this component. They should be configured
// in the application's main HTML shell if possible.
export const metadata: Metadata = {
  title: "AlphaAccess Exchange | Crypto Exchanges vs. Wallets",
  description: "The definitive comparison between custodial crypto exchanges and non-custodial wallets.",
};

// RootLayout component defines the main HTML structure for the entire application.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // To resolve the DOM nesting error, we avoid rendering <html>, <head>, and <body> tags here.
    // The component now returns a single <div> that wraps the page content.
    <div className="antialiased">
      {/*
        NOTE: The following tags were removed because they are only valid inside the <head> element.
        - <meta charSet="utf-8" />
        - <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        - <title>{String(metadata.title)}</title>
        - <meta name="description" content={String(metadata.description)} />
        - Font <link> tags
        This environment requires a different method to inject elements into the document head.
      */}

      {/* Loading Tailwind CSS via CDN. This is valid inside the main wrapper div. */}
      <script src="https://cdn.tailwindcss.com"></script>
      
      {/* Inlining essential styles. This is also valid here. */}
      <style>
        {`
          :root {
            --background: #ffffff;
            --foreground: #171717;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --background: #0a0a0a;
              --foreground: #ededed;
            }
          }
          body {
            /* Using a system font stack as the Google Font link was removed. */
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            background: var(--background);
            color: var(--foreground);
          }
        `}
      </style>

      {children}
    </div>
  );
}
