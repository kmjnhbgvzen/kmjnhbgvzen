import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Saharanpur | Blogs, Videos & SEO Content",
  description:
    "Build authority and organic traffic with a professional content marketing agency in Saharanpur. Blogs, website copy, videos & SEO-driven content. Free consultation.",
  keywords:
    "content marketing agency in Saharanpur, content marketing services Saharanpur, blog writing services Saharanpur, SEO content writing Saharanpur, content strategy company UP, website copywriting Saharanpur, video content marketing Saharanpur, content creation agency Saharanpur, digital content services Saharanpur, brand storytelling agency Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/content-marketing-agency-in-saharanpur",
  },
  openGraph: {
    title: "Content Marketing Agency in Saharanpur | Blogs, Videos & SEO Content",
    description:
      "Build authority and organic traffic with a professional content marketing agency in Saharanpur. Blogs, website copy, videos & SEO-driven content. Free consultation.",
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
    title: "Content Marketing Agency in Saharanpur | Blogs, Videos & SEO Content",
    description:
      "Build authority and organic traffic with a professional content marketing agency in Saharanpur. Blogs, website copy, videos & SEO-driven content. Free consultation.",
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