import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Manufacturers in Muzaffarnagar | Zentrix Infotech",
  description:
    "Zentrix Infotech offers specialised digital marketing for manufacturers in Muzaffarnagar including SEO, B2B branding, Google Ads & website design to boost trade inquiries. Get a free quote today.",
  keywords:
    "digital marketing for manufacturers in Muzaffarnagar, manufacturing marketing agency Muzaffarnagar, industrial digital marketing Muzaffarnagar, B2B marketing company Muzaffarnagar, manufacturer website design Muzaffarnagar, paper industry marketing Muzaffarnagar, timber industry digital marketing Muzaffarnagar, manufacturer SEO services Muzaffarnagar, industrial lead generation Muzaffarnagar, digital marketing agency Muzaffarnagar, affordable manufacturing marketing Muzaffarnagar",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/digital-marketing-for-manufacturers-in-muzaffarnagar",
  },
  openGraph: {
    title: "Digital Marketing for Manufacturers in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers specialised digital marketing for manufacturers in Muzaffarnagar including SEO, B2B branding, Google Ads & website design to boost trade inquiries. Get a free quote today.",
    url: "https://www.zentrixinfotech.com/digital-marketing-for-manufacturers-in-muzaffarnagar",
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
    title: "Digital Marketing for Manufacturers in Muzaffarnagar | Zentrix Infotech",
    description:
      "Zentrix Infotech offers specialised digital marketing for manufacturers in Muzaffarnagar including SEO, B2B branding, Google Ads & website design to boost trade inquiries. Get a free quote today.",
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