import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "YouTube Marketing Agency in Ghaziabad | Video SEO & Channel Growth",
  description:
    "Grow your brand with a specialized YouTube marketing agency in Ghaziabad. Video strategy, SEO, ads & channel management to build authority and drive leads. Free consultation.",
  keywords:
    "YouTube marketing agency in Ghaziabad, YouTube marketing company Ghaziabad, YouTube channel growth agency, YouTube SEO services Ghaziabad, YouTube Ads management company, video marketing agency Ghaziabad, YouTube content strategy services, best YouTube marketing agency near me, YouTube video production company, YouTube channel management services, YouTube advertising agency",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/youtube-marketing-agency-in-ghaziabad",
  },
  openGraph: {
    title: "YouTube Marketing Agency in Ghaziabad | Video SEO & Channel Growth",
    description:
      "Grow your brand with a specialized YouTube marketing agency in Ghaziabad. Video strategy, SEO, ads & channel management to build authority and drive leads. Free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/youtube-marketing-agency-in-ghaziabad",
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
    title: "YouTube Marketing Agency in Ghaziabad | Video SEO & Channel Growth",
    description:
      "Grow your brand with a specialized YouTube marketing agency in Ghaziabad. Video strategy, SEO, ads & channel management to build authority and drive leads. Free consultation.",
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