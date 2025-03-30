// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["localhost"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: "",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: "/crise.io", // Replace with your GitHub repo name
//   trailingSlash: true,
// };

// module.exports = nextConfig;

// const isProd = process.env.NODE_ENV === "production";

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     loader: "default",
//     path: isProd ? "/crise.io/" : "/",
//   },
// };


const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/crise.io" : "",
  assetPrefix: isProd ? "/crise.io/" : "",
  images: {
    unoptimized: true, // This is important for Next.js static exports (GitHub Pages)
  },
};

module.exports = nextConfig;
