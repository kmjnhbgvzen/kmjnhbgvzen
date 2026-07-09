import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Muzaffarnagar | Custom Web Design & Development",
  description:
    "Looking for a website development company in Muzaffarnagar? Get custom, mobile-friendly, SEO-ready websites built to convert visitors into customers.",
  keywords:
    "website development company in Muzaffarnagar, web design company Muzaffarnagar, website designing services Muzaffarnagar, custom website development Muzaffarnagar, ecommerce website development Muzaffarnagar, best web development company Muzaffarnagar, affordable website designers Muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/cities/muzaffarnagar/website-development-company-in-muzaffarnagar",
  },
  openGraph: {
    title: "Website Development Company in Muzaffarnagar | Custom Web Design & Development",
    description:
      "Looking for a website development company in Muzaffarnagar? Get custom, mobile-friendly, SEO-ready websites built to convert visitors into customers.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/website-development-company-in-muzaffarnagar",
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
    title: "Website Development Company in Muzaffarnagar | Custom Web Design & Development",
    description:
      "Looking for a website development company in Muzaffarnagar? Get custom, mobile-friendly, SEO-ready websites built to convert visitors into customers.",
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