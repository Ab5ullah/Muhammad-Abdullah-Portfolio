import type { NextConfig } from "next";

// Vercel: leave GITHUB_PAGES unset — this config is a no-op and Next deploys normally.
// GitHub Pages: the deploy workflow sets GITHUB_PAGES=true to produce a static `out/` export.
// If you deploy to a project page (username.github.io/repo-name rather than a custom
// domain or a username.github.io root repo), also uncomment basePath/assetPrefix below
// and set them to your repo name.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    images: { unoptimized: true },
    // basePath: "/your-repo-name",
    // assetPrefix: "/your-repo-name",
  }),
};

export default nextConfig;
