import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Improve SEO in Lucknow | 12 Steps | Zentrix Infotech",

  description:
    "Learn how to improve SEO in Lucknow with 12 practical steps for local visibility, content and site speed. Zentrix Infotech can help. Get a free SEO review.",

  keywords:
    "how to improve SEO in Lucknow, improve website ranking Lucknow, SEO tips for Lucknow businesses, how to rank on Google in Lucknow, improve local SEO Lucknow, SEO guide for small business Lucknow, increase website traffic Lucknow, SEO steps for beginners, Google Business Profile tips, on-page SEO checklist, mobile page speed, Hinglish keywords, local reviews, internal linking, content for local customers, technical SEO basics, SEO tracking, SEO mistakes to avoid, zentrix infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/how-to-improve-seo-in-lucknow",
  },

  openGraph: {
    title: "How to Improve SEO in Lucknow | 12 Steps | Zentrix Infotech",
    description:
      "Learn how to improve SEO in Lucknow with 12 practical steps for local visibility, content and site speed. Zentrix Infotech can help. Get a free SEO review.",
    url: "https://www.zentrixinfotech.com/lucknow/how-to-improve-seo-in-lucknow",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Improve SEO in Lucknow | 12 Steps | Zentrix Infotech",
    description:
      "Learn how to improve SEO in Lucknow with 12 practical steps for local visibility, content and site speed. Zentrix Infotech can help. Get a free SEO review.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
    </>
  );
}