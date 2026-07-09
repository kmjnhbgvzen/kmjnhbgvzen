import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Company in Hapur | SEO, PPC, Web & Social Media",
  description:
    "Searching for the best digital marketing company in Hapur? Get expert SEO, PPC, social media, and website solutions to grow your business online effectively.",
  keywords:
    "best digital marketing company in Hapur, digital marketing agency Hapur, online marketing company Hapur, SEO and PPC agency Hapur, social media marketing Hapur, digital marketing services Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/hapur/best-digital-marketing-company-in-hapur",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Hapur | SEO, PPC, Web & Social Media",
    description:
      "Searching for the best digital marketing company in Hapur? Get expert SEO, PPC, social media, and website solutions to grow your business online effectively.",
    url: "https://www.zentrixinfotech.com/hapur/best-digital-marketing-company-in-hapur",
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
    title: "Best Digital Marketing Company in Hapur | SEO, PPC, Web & Social Media",
    description:
      "Searching for the best digital marketing company in Hapur? Get expert SEO, PPC, social media, and website solutions to grow your business online effectively.",
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