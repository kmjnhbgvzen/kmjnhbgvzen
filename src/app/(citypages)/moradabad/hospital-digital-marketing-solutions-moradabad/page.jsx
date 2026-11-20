import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Hospital Digital Marketing Solutions in Moradabad",
  description:
    "Practical hospital digital marketing solutions in Moradabad to fix low visibility, weak enquiries and poor reviews. Talk to Zentrix Infotech today.",
  keywords:
    "hospital digital marketing solutions Moradabad, digital marketing solutions for hospitals, healthcare marketing solutions Moradabad, hospital patient acquisition, increase hospital OPD enquiries, hospital online visibility, hospital lead generation, hospital branding Moradabad, hospital website and SEO, hospital reputation solutions, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/hospital-digital-marketing-solutions-moradabad",
  },

  openGraph: {
    title: "Hospital Digital Marketing Solutions in Moradabad",
    description:
      "Practical hospital digital marketing solutions in Moradabad to fix low visibility, weak enquiries and poor reviews. Talk to Zentrix Infotech today.",
    url: "https://www.zentrixinfotech.com/moradabad/hospital-digital-marketing-solutions-moradabad",
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
    title: "Hospital Digital Marketing Solutions in Moradabad",
    description:
      "Practical hospital digital marketing solutions in Moradabad to fix low visibility, weak enquiries and poor reviews. Talk to Zentrix Infotech today.",
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