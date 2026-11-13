import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Top Healthcare Digital Marketing Firms Moradabad | Zentrix",
  description:
    "Looking for the top healthcare digital marketing firms in Moradabad? Learn how to compare firms, spot red flags and get more patients with Zentrix Infotech.",
  keywords:
    "top healthcare digital marketing firms in Moradabad, healthcare digital marketing firms Moradabad, best healthcare marketing company Moradabad, hospital digital marketing Moradabad, digital marketing for doctors Moradabad, medical marketing agency Moradabad, clinic marketing services Moradabad, healthcare SEO Moradabad, patient acquisition Moradabad, hospital branding Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/top-healthcare-digital-marketing-firms-in-moradabad",
  },

  openGraph: {
    title:
      "Top Healthcare Digital Marketing Firms Moradabad | Zentrix",
    description:
      "Looking for the top healthcare digital marketing firms in Moradabad? Learn how to compare firms, spot red flags and get more patients with Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/top-healthcare-digital-marketing-firms-in-moradabad",
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
    title:
      "Top Healthcare Digital Marketing Firms Moradabad | Zentrix",
    description:
      "Looking for the top healthcare digital marketing firms in Moradabad? Learn how to compare firms, spot red flags and get more patients with Zentrix Infotech.",
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