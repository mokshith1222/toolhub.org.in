/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Enforce canonical non-www domain: redirect www.toolhub.org.in to toolhub.org.in
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.toolhub.org.in",
          },
        ],
        destination: "https://toolhub.org.in/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Apply X-Robots-Tag: noindex, nofollow to all vercel.app preview/staging URLs
        // Production domain (toolhub.org.in) will NOT match this and will remain indexable
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "(?<host>.*\\.vercel\\.app)",
          },
        ],
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
