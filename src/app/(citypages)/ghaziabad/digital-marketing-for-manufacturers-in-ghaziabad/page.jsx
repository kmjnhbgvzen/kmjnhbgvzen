import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Manufacturers in Ghaziabad | Zentrix Infotech",
  description:
    "Specialized digital marketing for manufacturers in Ghaziabad to generate B2B leads, boost export inquiries, and build online credibility. Get a free consultation.",
  keywords:
    "digital marketing for manufacturers in Ghaziabad, manufacturing company marketing agency Ghaziabad, B2B digital marketing Ghaziabad, industrial marketing services Ghaziabad, manufacturer SEO services Ghaziabad, export lead generation Ghaziabad, best digital marketing company for manufacturers Ghaziabad, manufacturing website design Ghaziabad, industrial marketing services near me, B2B lead generation Ghaziabad, manufacturer branding agency Ghaziabad, factory digital marketing Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-manufacturers-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for Manufacturers in Ghaziabad | Zentrix Infotech",
    description:
      "Specialized digital marketing for manufacturers in Ghaziabad to generate B2B leads, boost export inquiries, and build online credibility. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-for-manufacturers-ghaziabad",
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
    title: "Digital Marketing for Manufacturers in Ghaziabad | Zentrix Infotech",
    description:
      "Specialized digital marketing for manufacturers in Ghaziabad to generate B2B leads, boost export inquiries, and build online credibility. Get a free consultation.",
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