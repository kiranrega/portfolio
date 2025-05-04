export const siteConfig = {
  name: "Kiran Kumar Rega",
  description: "Frontend Developer specializing in creating elegant, responsive digital experiences. Currently focused on building user-centric web applications at IntouchCX.",
  url: "https://kiranrega.netlify.app",
  ogImage: "https://kirankumarrega.com/og-image.png",
  links: {
    twitter: "https://twitter.com/kiranrega",
    github: "https://github.com/kiranrega",
    linkedin: "https://linkedin.com/in/kiranrega",
  },
};

export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Frontend Developer",
    "React.js",
    "TypeScript",
    "Web Development",
    "UI/UX",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Kiran Kumar Rega",
      url: siteConfig.url,
    },
  ],
  creator: "Kiran Kumar Rega",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@kirankumarrega",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
}; 