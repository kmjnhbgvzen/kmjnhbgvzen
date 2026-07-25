import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "E-commerce Marketing Services in Bareilly | Online Store Growth",
  description:
    "Looking for e-commerce marketing services in Bareilly? Get expert product listing optimization, paid ads, SEO, and social media strategies to grow your online store sales.",
  keywords:
    "e-commerce marketing services in Bareilly, online store marketing Bareilly, e-commerce SEO Bareilly, Amazon Flipkart marketing Bareilly, online selling services Bareilly, e-commerce ads agency Bareilly, product listing optimization Bareilly, best e-commerce marketing company UP, online store growth Bareilly, affordable e-commerce marketing Bareilly",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/e-commerce-marketing-services-in-bareilly",
  },
  openGraph: {
    title: "E-commerce Marketing Services in Bareilly | Online Store Growth",
    description:
      "Looking for e-commerce marketing services in Bareilly? Get expert product listing optimization, paid ads, SEO, and social media strategies to grow your online store sales.",
    url: "https://www.zentrixinfotech.com/cities/bareilly/ecommerce-marketing-services-in-bareilly",
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
    title: "E-commerce Marketing Services in Bareilly | Online Store Growth",
    description:
      "Looking for e-commerce marketing services in Bareilly? Get expert product listing optimization, paid ads, SEO, and social media strategies to grow your online store sales.",
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