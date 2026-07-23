import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Retailers in Varanasi | Grow Sales",
  description:
    "Digital marketing for retailers in Varanasi — SEO, social media & ads that drive footfall and online sales for local shops. Get a free store audit today.",
  keywords:
    "digital marketing for retailers in Varanasi, retail marketing agency Varanasi, local shop digital marketing Varanasi, saree store marketing Varanasi, handicraft business marketing Varanasi, e-commerce marketing Varanasi, retail SEO company UP, local business promotion Varanasi, footfall marketing Varanasi",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-retailers-varanasi",
  },
  openGraph: {
    title: "Digital Marketing for Retailers in Varanasi | Grow Sales",
    description:
      "Digital marketing for retailers in Varanasi — SEO, social media & ads that drive footfall and online sales for local shops. Get a free store audit today.",
    url: "https://www.zentrixinfotech.com/varanasi/digital-marketing-for-retailers-varanasi",
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
    title: "Digital Marketing for Retailers in Varanasi | Grow Sales",
    description:
      "Digital marketing for retailers in Varanasi — SEO, social media & ads that drive footfall and online sales for local shops. Get a free store audit today.",
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