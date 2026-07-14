import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "YouTube Marketing Agency in Meerut | Zentrix Infotech",
  description:
    "Grow your brand with a trusted YouTube marketing agency in Meerut. Zentrix Infotech helps you create, optimize, and promote videos that generate real leads.",
  keywords:
    "YouTube marketing agency in Meerut, YouTube SEO services Meerut, video marketing agency UP, YouTube channel growth services, YouTube ads agency Meerut, video production company Meerut, Zentrix Infotech Meerut, YouTube marketing company UP, YouTube optimization services, video content marketing agency, YouTube advertising services Meerut, digital marketing agency Meerut, YouTube growth strategy India, brand video marketing Meerut, YouTube marketing Uttar Pradesh",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/youtube-marketing-agency-meerut",
  },
  openGraph: {
    title: "YouTube Marketing Agency in Meerut | Zentrix Infotech",
    description:
      "Grow your brand with a trusted YouTube marketing agency in Meerut. Zentrix Infotech helps you create, optimize, and promote videos that generate real leads.",
    url: "https://www.zentrixinfotech.com/meerut/youtube-marketing-agency-meerut",
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
    title: "YouTube Marketing Agency in Meerut | Zentrix Infotech",
    description:
      "Grow your brand with a trusted YouTube marketing agency in Meerut. Zentrix Infotech helps you create, optimize, and promote videos that generate real leads.",
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