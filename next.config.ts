import type { NextConfig } from "next";

// Evaluated once in Node at build time (i.e. on each Vercel deploy), then
// inlined into the bundle as a string literal via the `env` config below.
// This reflects when the site was last built/deployed, NOT request time, so
// it is identical for every visitor regardless of when they load the page.
const buildDate = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: buildDate,
  },
};

export default nextConfig;
