/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="KrishZhaoKaushik_Resume.pdf"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
