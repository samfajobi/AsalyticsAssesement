/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  image: {
    domains: ["algorand-wallet-mainnet.s3.amazonaws.com"],
  },
};
