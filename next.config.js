/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/uc', // Pastikan URL menuju ke /uc?id= untuk format tampilan gambar Google Drive
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io', // Hapus tanda kutip berlebih
        port: '',
        pathname: '/**', // Pathname dibuat wildcard untuk mendukung berbagai path
      },
    ],
  },
}

module.exports = nextConfig;
