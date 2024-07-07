/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['s3.eu-central-1.amazonaws.com', "prod-images.cooingestate.com"],
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.eu-central-1.amazonaws.com',
                port: '',
                pathname: '/prod.images.cooingestate.com/**'
            },
            {
                protocol: 'https',
                hostname: 'prod-images.cooingestate.com',
                port: '',
                pathname: '/processed/compound_image/image/**'
            }
        ]
    }
};

export default nextConfig;
