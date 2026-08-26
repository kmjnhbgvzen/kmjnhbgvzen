import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom Software Modification Company in India | ZentrixInfotech",
  description:
    "Existing software not meeting your needs? ZentrixInfotech offers custom software modification services in India. Get a free consultation now.",
  keywords:
    "software modification company India, custom software modification company India, custom software modification services India, software modification services India, existing software modification company, customize existing software India, software customization company India, modify existing software India, software upgrade company India, software customization services India, add features to existing software India, legacy software modification India, software enhancement services India, software modernization services India",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/custom-software-modification-company-india",
  },
  openGraph: {
    title: "Custom Software Modification Company in India | ZentrixInfotech",
    description:
      "Existing software not meeting your needs? ZentrixInfotech offers custom software modification services in India. Get a free consultation now.",
    url: "https://www.zentrixinfotech.com/custom-software-modification-company-india",
    siteName: "ZentrixInfotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "ZentrixInfotech Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Modification Company in India | ZentrixInfotech",
    description:
      "Existing software not meeting your needs? ZentrixInfotech offers custom software modification services in India. Get a free consultation now.",
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