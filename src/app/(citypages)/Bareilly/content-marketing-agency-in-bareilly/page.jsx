import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Bareilly | Blogs, Videos & SEO Content",
  description:
    "Looking for a content marketing agency in Bareilly? Get expert blog writing, video content, and SEO-driven content strategy to build trust and grow organic traffic.",
  keywords:
    "content marketing agency in Bareilly, content writing services Bareilly, blog writing agency Bareilly, SEO content services Bareilly, video content marketing Bareilly, content strategy company Bareilly, best content marketing agency UP, content creation services Bareilly, copywriting agency Bareilly, affordable content marketing Bareilly",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/content-marketing-agency-in-bareilly",
  },
  openGraph: {
    title: "Content Marketing Agency in Bareilly | Blogs, Videos & SEO Content",
    description:
      "Looking for a content marketing agency in Bareilly? Get expert blog writing, video content, and SEO-driven content strategy to build trust and grow organic traffic.",
    url: "https://www.zentrixinfotech.com/bareilly/content-marketing-agency-in-bareilly",
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
    title: "Content Marketing Agency in Bareilly | Blogs, Videos & SEO Content",
    description:
      "Looking for a content marketing agency in Bareilly? Get expert blog writing, video content, and SEO-driven content strategy to build trust and grow organic traffic.",
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