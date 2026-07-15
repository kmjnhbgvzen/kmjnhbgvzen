import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Hapur | Zentrix Infotech",
  description:
    "Trusted YouTube Marketing Agency in Hapur for channel growth, video SEO, and ad campaigns that boost brand visibility and sales. Get a free consultation.",
  keywords:
    "YouTube Marketing Agency in Hapur, YouTube marketing company Hapur, YouTube channel growth services Hapur, YouTube SEO services Hapur, YouTube ads agency Hapur, video marketing company Hapur, best YouTube marketing company Hapur, YouTube marketing services near me, YouTube video optimization Hapur, brand YouTube channel management Hapur, YouTube subscriber growth Hapur, business YouTube marketing Hapur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/hapur/youtube-marketing-agency-hapur",
  },
  openGraph: {
    title: "YouTube Marketing Agency in Hapur | Zentrix Infotech",
    description:
      "Trusted YouTube Marketing Agency in Hapur for channel growth, video SEO, and ad campaigns that boost brand visibility and sales. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/hapur/youtube-marketing-agency-hapur",
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
    title: "YouTube Marketing Agency in Hapur | Zentrix Infotech",
    description:
      "Trusted YouTube Marketing Agency in Hapur for channel growth, video SEO, and ad campaigns that boost brand visibility and sales. Get a free consultation.",
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