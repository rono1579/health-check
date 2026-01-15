import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/love.png" />
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
         {/* Bootstrap CSS --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeo8LfNHPtH6fJ8Mk4aJv+zU1l8ld8f6B2nxGcfQZy0W9l02"
          crossOrigin="anonymous"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
          integrity="sha384-okAq2a60Tu5PfWxz16OYV46kv2W7DRMQdwz+Gy6X0VZpGrZ0lN/+NpyZ6D+IQPMt"
          crossOrigin="anonymous"
          defer
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9bInh5wgffy3U8Vsa7+6jC1vGM/ZY9uP9hUhbE6LQOYq0ZBDzW+fw5y"
          crossOrigin="anonymous"
          defer
        ></script>

      </head>
      <body className={`${inter.className}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}