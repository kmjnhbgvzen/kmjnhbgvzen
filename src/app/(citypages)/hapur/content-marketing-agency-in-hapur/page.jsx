import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Hapur | Content Strategy & SEO",
  description:
    "Grow your online presence with a content marketing agency in Hapur offering SEO content, website content, social media strategy, lead-focused campaigns and business growth solutions.",
  keywords:
    "content marketing agency in Hapur, content marketing services in Hapur, content marketing company in Hapur, content writing agency in Hapur, SEO content writing in Hapur, digital content marketing in Hapur, content strategy in Hapur, website content services in Hapur, SEO content services in Hapur, digital marketing agency in Hapur, SEO services in Hapur, social media marketing in Hapur, local SEO in Hapur, business content marketing, lead generation through content, website marketing in Hapur, online marketing services in Hapur, business software customization services, customize my CRM software, software modification services, upgrade old software to new requirements, customize my inventory management software, customize my billing software, software customization services in Moradabad, custom software modification company India, add new features to existing software, integrate new module in existing software, free requirement analysis software customization",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/content-marketing-agency-in-hapur",
  },
  openGraph: {
    title: "Content Marketing Agency in Hapur | Content Strategy & SEO",
    description:
      "Grow your online presence with a content marketing agency in Hapur offering SEO content, website content, social media strategy, lead-focused campaigns and business growth solutions.",
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
    title: "Content Marketing Agency in Hapur | Content Strategy & SEO",
    description:
      "Grow your online presence with a content marketing agency in Hapur offering SEO content, website content, social media strategy, lead-focused campaigns and business growth solutions.",
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