import withPWAInit from "@ducanh2912/next-pwa";

const nextConfig = {
  // تنظیمات مربوط به Next.js اینجا قرار بگیرد
};

export default withPWAInit({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
})(nextConfig);



