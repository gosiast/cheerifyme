/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.mzstatic.com", // allows is1-ssl.mzstatic.com, is2-ssl.mzstatic.com, etc.
			},
		],
	},
};

export default nextConfig;
