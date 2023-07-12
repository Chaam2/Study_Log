/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/movies/:id',
        destination: '/films/:id',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/watchit/**',
      },
    ],
  },
};

module.exports = nextConfig;

/*
redirect - https://nextjs.org/docs/app/api-reference/next-config-js/redirects
source : 변경할 주소 / destination : 리다이렉트 할 주소
permanent : true->브라우저가 리다티렉트를 저장(캐싱)함(308 status) / false->캐싱하지 않음(307 status)
*/
