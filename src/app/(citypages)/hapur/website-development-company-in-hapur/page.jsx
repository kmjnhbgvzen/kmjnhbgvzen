import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Hapur | Affordable & Professional Web Design",
  description:
    "Looking for a website development company in Hapur? Get custom, affordable, and SEO-friendly website design services for small businesses, startups, and enterprises.",
  keywords:
    "website development company in Hapur, web design company Hapur, website designer Hapur, affordable website development Hapur, ecommerce website development Hapur, custom web development Hapur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/hapur/website-development-company-in-hapur",
  },
  openGraph: {
    title: "Website Development Company in Hapur | Affordable & Professional Web Design",
    description:
      "Looking for a website development company in Hapur? Get custom, affordable, and SEO-friendly website design services for small businesses, startups, and enterprises.",
    url: "https://www.zentrixinfotech.com/cities/hapur/website-development-company-in-hapur",
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
    title: "Website Development Company in Hapur | Affordable & Professional Web Design",
    description:
      "Looking for a website development company in Hapur? Get custom, affordable, and SEO-friendly website design services for small businesses, startups, and enterprises.",
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