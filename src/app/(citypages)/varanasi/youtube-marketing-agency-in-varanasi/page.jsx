import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Varanasi | Grow Your Channel",
  description:
    "Looking for a YouTube marketing agency in Varanasi? Get expert video SEO, channel growth, ad management & content strategy. Free consultation today.",
  keywords:
    "YouTube marketing agency in Varanasi, YouTube marketing services Varanasi, YouTube SEO company Varanasi, video marketing agency Varanasi, YouTube channel growth Varanasi, YouTube ads agency Varanasi, digital marketing agency Varanasi, YouTube video promotion Varanasi, best YouTube marketing company in UP",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/youtube-marketing-agency-in-varanasi",
  },
  openGraph: {
    title: "YouTube Marketing Agency in Varanasi | Grow Your Channel",
    description:
      "Looking for a YouTube marketing agency in Varanasi? Get expert video SEO, channel growth, ad management & content strategy. Free consultation today.",
    url: "https://www.zentrixinfotech.com/varanasi/youtube-marketing-agency-in-varanasi",
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
    title: "YouTube Marketing Agency in Varanasi | Grow Your Channel",
    description:
      "Looking for a YouTube marketing agency in Varanasi? Get expert video SEO, channel growth, ad management & content strategy. Free consultation today.",
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