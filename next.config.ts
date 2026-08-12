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
      { source: '/features/google-classroom', destination: '/services/integrations/google-classroom', permanent: true },
      { source: '/features/canvas-lms', destination: '/services/integrations/canvas-lms', permanent: true },
      { source: '/features/buzz-lms', destination: '/services/integrations/buzz-lms', permanent: true },
    ];
  },
};
module.exports = nextConfig;
