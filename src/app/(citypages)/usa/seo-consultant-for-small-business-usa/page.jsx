import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Consultant for Small Business USA",
  description:
    "Hire a dedicated SEO consultant for your small business in the USA. Affordable, personalized SEO strategies to increase visibility, traffic, and customers.",
  keywords:
    "seo consultant for small business usa, small business seo consultant, freelance seo consultant usa, affordable seo consultant, local seo consultant usa, small business seo expert, independent seo consultant, seo consulting services usa, hire seo consultant usa, small business seo help, seo consultant near me, seo strategy consultant usa",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/usa/seo-consultant-small-business-usa",
  },
  openGraph: {
    title: "SEO Consultant for Small Business USA",
    description:
      "Hire a dedicated SEO consultant for your small business in the USA. Affordable, personalized SEO strategies to increase visibility, traffic, and customers.",
    url: "https://www.zentrixinfotech.com/usa/seo-consultant-small-business-usa",
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
    title: "SEO Consultant for Small Business USA",
    description:
      "Hire a dedicated SEO consultant for your small business in the USA. Affordable, personalized SEO strategies to increase visibility, traffic, and customers.",
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