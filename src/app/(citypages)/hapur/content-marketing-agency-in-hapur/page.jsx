import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Hapur | Blogs, SEO Content & Brand Storytelling",
  description:
    "Looking for a content marketing agency in Hapur? Get professionally written blogs, website content, and SEO-focused strategies that build authority and drive traffic.",
  keywords:
    "content marketing agency in Hapur, content marketing services Hapur, blog writing agency Hapur, SEO content writing Hapur, content strategy company Hapur, content writing services Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/content-marketing-agency-in-hapur",
  },
  openGraph: {
    title: "Content Marketing Agency in Hapur | Blogs, SEO Content & Brand Storytelling",
    description:
      "Looking for a content marketing agency in Hapur? Get professionally written blogs, website content, and SEO-focused strategies that build authority and drive traffic.",
    url: "https://www.zentrixinfotech.com/hapur/content-marketing-agency-in-hapur",
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
    title: "Content Marketing Agency in Hapur | Blogs, SEO Content & Brand Storytelling",
    description:
      "Looking for a content marketing agency in Hapur? Get professionally written blogs, website content, and SEO-focused strategies that build authority and drive traffic.",
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