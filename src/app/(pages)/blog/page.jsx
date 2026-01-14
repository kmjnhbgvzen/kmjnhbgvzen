import BlogPostPage from "./BlogPostPage";

export const metadata = {
  title: "Zentrix Infotech Blog | SEO, Digital Marketing & Technology Insights",
  description:
    "Read expert blogs by Zentrix Infotech covering SEO, digital marketing, web development, UI/UX, cloud solutions, and business growth strategies.",

  keywords:
    "Zentrix Infotech blog, SEO blogs, digital marketing blogs, web development articles, technology insights, business growth tips, organic growth seo blogs, digital marketing blog by zentrix, seo blog by zentrix infotech, online marketing tips for companies, content marketing and seo blogs, business marketing strategy articles, technology and marketing insights blog",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.zentrixinfotech.com/blog",
  },

  openGraph: {
    type: "website",
    url: "https://www.zentrixinfotech.com/blog",
    title:
      "Zentrix Infotech Blog | SEO, Digital Marketing & Web Development",
    description:
      "Explore insightful blogs from Zentrix Infotech on SEO marketing, digital transformation, web development, and scalable technology solutions.",
    images: [
      {
        url: "https://zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt:
          "Zentrix Infotech Blog – Digital Marketing & Technology Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Zentrix Infotech Blog | Digital Marketing & Technology Insights",
    description:
      "Stay updated with the latest blogs on SEO, digital marketing, web development, and business technology by Zentrix Infotech.",
    images: [
      "https://zentrixinfotech.com/zentrix_logo.jpg",
    ],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogPostPage />
    </div>
  );
}
