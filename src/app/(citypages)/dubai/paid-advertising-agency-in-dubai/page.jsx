import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Paid Advertising Agency in Dubai | Google & Meta Ads Experts",
  description:
    "Grow leads and sales with a trusted paid advertising agency in Dubai. Expert Google Ads, Meta Ads & display campaigns built for maximum ROI. Get a free ad audit.",
  keywords:
    "paid advertising agency in Dubai, paid ads agency Dubai, paid media agency Dubai, digital advertising company Dubai, Google Ads agency Dubai, Meta Ads agency Dubai, paid search agency Dubai, best paid advertising company UAE, paid marketing agency Dubai, online advertising agency Dubai, PPC and social ads agency Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/paid-advertising-agency-dubai",
  },

  openGraph: {
    title: "Paid Advertising Agency in Dubai | Google & Meta Ads Experts",
    description:
      "Grow leads and sales with a trusted paid advertising agency in Dubai. Expert Google Ads, Meta Ads & display campaigns built for maximum ROI. Get a free ad audit.",
    url: "https://www.zentrixinfotech.com/dubai/paid-advertising-agency-dubai",
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
    title: "Paid Advertising Agency in Dubai | Google & Meta Ads Experts",
    description:
      "Grow leads and sales with a trusted paid advertising agency in Dubai. Expert Google Ads, Meta Ads & display campaigns built for maximum ROI. Get a free ad audit.",
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