import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Muzaffarnagar | Affordable & Result-Driven SEO Company",
  description:
    "Looking for SEO services in Muzaffarnagar? Get expert on-page, off-page, local & technical SEO to rank higher on Google, drive traffic & grow leads.",
  keywords:
    "SEO services in Muzaffarnagar, SEO company in Muzaffarnagar, best SEO agency Muzaffarnagar, local SEO Muzaffarnagar, digital marketing Muzaffarnagar, SEO experts Muzaffarnagar, affordable SEO services Muzaffarnagar",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/muzaffarnagar/seo-services-in-muzaffarnagar",
  },
  openGraph: {
    title: "SEO Services in Muzaffarnagar | Affordable & Result-Driven SEO Company",
    description:
      "Looking for SEO services in Muzaffarnagar? Get expert on-page, off-page, local & technical SEO to rank higher on Google, drive traffic & grow leads.",
    url: "https://www.zentrixinfotech.com/muzaffarnagar/seo-services-in-muzaffarnagar",
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
    title: "SEO Services in Muzaffarnagar | Affordable & Result-Driven SEO Company",
    description:
      "Looking for SEO services in Muzaffarnagar? Get expert on-page, off-page, local & technical SEO to rank higher on Google, drive traffic & grow leads.",
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