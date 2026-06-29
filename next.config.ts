import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/contacter-nous", permanent: true },
      { source: "/mentions-legales", destination: "/mentions-legales-cgv", permanent: true },
      { source: "/services", destination: "/nos-services", permanent: true },
      {
        source: "/services/controle-production",
        destination: "/nos-services",
        permanent: true,
      },
      {
        source: "/services/expertise-cnd",
        destination: "/missions-dexpertise-cnd",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
