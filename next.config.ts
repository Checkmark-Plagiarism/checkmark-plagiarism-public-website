// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: ['public.checkmarkplagiarism.com'],
  },
  async redirects() {
    return [
      // The old "Blog" section is now "Research". Permanently redirect every
      // legacy /blog URL (listing + nested articles) to /research, preserving
      // the {year}/{month}/{slug} tail and any query string for SEO/link equity.
      { source: '/blog', destination: '/research', permanent: true },
      { source: '/blog/:path*', destination: '/research/:path*', permanent: true },
    ];
  },
};
module.exports = nextConfig;
