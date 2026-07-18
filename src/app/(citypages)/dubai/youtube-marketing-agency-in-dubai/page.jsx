import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Dubai | Grow Views & Sales",
  description:
    "Partner with a results-driven YouTube marketing agency in Dubai. Channel strategy, video SEO & YouTube Ads that turn views into real leads and customers.",
  keywords:
    "YouTube marketing agency in Dubai, YouTube marketing services Dubai, YouTube SEO agency UAE, YouTube ads agency Dubai, video marketing company Dubai, YouTube channel growth Dubai, YouTube advertising Dubai, best YouTube marketing agency UAE, YouTube video production Dubai, YouTube marketing strategy Dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/youtube-marketing-agency-in-dubai",
  },

  openGraph: {
    title: "YouTube Marketing Agency in Dubai | Grow Views & Sales",
    description:
      "Partner with a results-driven YouTube marketing agency in Dubai. Channel strategy, video SEO & YouTube Ads that turn views into real leads and customers.",
    url: "https://www.zentrixinfotech.com/dubai/youtube-marketing-agency-in-dubai",
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
    title: "YouTube Marketing Agency in Dubai | Grow Views & Sales",
    description:
      "Partner with a results-driven YouTube marketing agency in Dubai. Channel strategy, video SEO & YouTube Ads that turn views into real leads and customers.",
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