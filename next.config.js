module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { fs: false, path: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  env: {
    TITLE: "کامپیوتر صنعتی ارومیه",
    EMAIL: "ceit.uut@gmail.com",
    URL: "https://codegeeks.ir",
    API: "https://api.codegeeks.ir/",
    TEST_API: "https://test.codegeeks.ir/",
    GITHUB: "ceituut",
    PAGES: [
      { type: "main", name: "مسابقات", path: "/challenges", repo: "challenges" },
      { type: "main", name: "رویدادها", path: "/events", repo: "events" },
      { type: "main", name: "پروژه‌ها", path: "/projects", repo: "projects" },
      { type: "main", name: "انتشارات", path: "/blog", repo: "posts" },
      { type: "footer", name: "نیازمندی‌ها", path: "/requirements", repo: "requirements"},
      { type: "footer", name: "سوالات‌متداول", path: "/faqs", repo: "faqs" },
      { type: "footer", name: "درباره‌ما", path: "/about", repo: "members" },
      { type: "sponsor", name: "حمایت", path: "/sponsor", repo: "ceituut.github.io" },
      { type: "other", name: "همراهان", path: "/companions", repo: "companions" },
    ],
    SOCIAL: [
      { name: "youtube", link: "https://www.youtube.com/channel/UCVHy7Dv9vkf3zt0_P2J5vLw"},
      { name: "instagram", link: "https://www.instagram.com/ceit_uut" },
      { name: "telegram", link: "https://t.me/ceit_uut" },
      { name: "github", link: "https://github.com/ceituut" },
    ],
  },
};
