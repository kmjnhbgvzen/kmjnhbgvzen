import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "IT Software Development Company in Moradabad | Zentrix Infotech",
  description:
    "Zentrix Infotech is an IT software development company in Moradabad offering custom software, web, mobile, UI/UX, cloud and digital marketing. Get a free quote.",
  keywords:
    "IT software development company in moradabad, IT company in moradabad, software development company in moradabad, IT solutions company moradabad, custom software development moradabad, web development company moradabad, mobile app development company moradabad, UI UX design company moradabad, cloud solutions company moradabad, digital marketing company moradabad, IT services moradabad, IT consulting moradabad, best IT company in moradabad, software and IT outsourcing moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/it-software-development-company-in-moradabad",
  },

  openGraph: {
    title:
      "IT Software Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an IT software development company in Moradabad offering custom software, web, mobile, UI/UX, cloud and digital marketing. Get a free quote.",
    url: "https://www.zentrixinfotech.com/moradabad/it-software-development-company-in-moradabad",
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
      "IT Software Development Company in Moradabad | Zentrix Infotech",
    description:
      "Zentrix Infotech is an IT software development company in Moradabad offering custom software, web, mobile, UI/UX, cloud and digital marketing. Get a free quote.",
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