import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC & Google Ads Agency in Prayagraj | Zentrix Infotech",
  description:
    "Get instant, high-quality leads with a trusted PPC & Google Ads agency in Prayagraj. Zentrix Infotech runs targeted ad campaigns that maximize ROI and reduce wasted ad spend.",
  keywords:
    "PPC agency in Prayagraj, Google Ads agency Prayagraj, PPC services Prayagraj, Google Ads management Prayagraj, pay per click advertising Prayagraj, digital marketing agency Prayagraj, PPC company near me, best Google Ads expert Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/ppc-google-ads-agency-in-prayagraj",
  },
  openGraph: {
    title: "PPC & Google Ads Agency in Prayagraj | Zentrix Infotech",
    description:
      "Get instant, high-quality leads with a trusted PPC & Google Ads agency in Prayagraj. Zentrix Infotech runs targeted ad campaigns that maximize ROI and reduce wasted ad spend.",
    url: "https://www.zentrixinfotech.com/prayagraj/ppc-google-ads-agency-in-prayagraj",
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
    title: "PPC & Google Ads Agency in Prayagraj | Zentrix Infotech",
    description:
      "Get instant, high-quality leads with a trusted PPC & Google Ads agency in Prayagraj. Zentrix Infotech runs targeted ad campaigns that maximize ROI and reduce wasted ad spend.",
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