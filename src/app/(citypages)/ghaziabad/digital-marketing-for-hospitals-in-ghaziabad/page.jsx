import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Hospitals in Ghaziabad | Zentrix Infotech",
  description:
    "Specialized digital marketing for hospitals in Ghaziabad to increase patient inquiries, build trust, and improve online visibility. Get a free consultation.",
  keywords:
    "digital marketing for hospitals in Ghaziabad, hospital marketing agency Ghaziabad, healthcare digital marketing Ghaziabad, hospital SEO services Ghaziabad, patient acquisition marketing Ghaziabad, medical practice marketing Ghaziabad, best digital marketing company for hospitals Ghaziabad, hospital website design Ghaziabad, healthcare marketing services near me, clinic digital marketing Ghaziabad, doctor marketing services Ghaziabad, hospital branding agency Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-hospitals-in-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for Hospitals in Ghaziabad | Zentrix Infotech",
    description:
      "Specialized digital marketing for hospitals in Ghaziabad to increase patient inquiries, build trust, and improve online visibility. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-hospitals-in-ghaziabad",
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
    title: "Digital Marketing for Hospitals in Ghaziabad | Zentrix Infotech",
    description:
      "Specialized digital marketing for hospitals in Ghaziabad to increase patient inquiries, build trust, and improve online visibility. Get a free consultation.",
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