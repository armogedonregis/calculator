/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withTM = require("next-transpile-modules")([
  "lodash-es",
  "react-d3-speedometer"
]);

module.exports = withTM();

module.exports = nextConfig;
