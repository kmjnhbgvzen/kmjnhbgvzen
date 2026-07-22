import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Saharanpur | Zentrix Infotech",
  description:
    "Grow traffic, authority, and leads with content marketing services in Saharanpur. Blogs, website copy, SEO content, and brand storytelling.",
  keywords:
    "content marketing agency in Saharanpur, content marketing services Saharanpur, blog writing services Saharanpur, SEO content writing Saharanpur, website copywriting Saharanpur, content strategy Saharanpur, brand storytelling agency Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/content-marketing-agency-in-saharanpur",
  },
  openGraph: {
    title: "Content Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Grow traffic, authority, and leads with content marketing services in Saharanpur. Blogs, website copy, SEO content, and brand storytelling.",
    url: "https://www.zentrixinfotech.com/saharanpur/content-marketing-agency-in-saharanpur",
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
    title: "Content Marketing Agency in Saharanpur | Zentrix Infotech",
    description:
      "Grow traffic, authority, and leads with content marketing services in Saharanpur. Blogs, website copy, SEO content, and brand storytelling.",
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