import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title:
    "Best Software Development Company in Moradabad | Zentrix",
  description:
    "Searching for the best software development company in Moradabad? See what to look for and why Zentrix Infotech, with 250+ projects, is a trusted choice.",
  keywords:
    "best software development company in Moradabad, top software company Moradabad, best software developers Moradabad, leading IT company Moradabad, custom software development Moradabad, trusted software company Moradabad, best custom software company Moradabad, software development services Moradabad, ERP software company Moradabad, web application development Moradabad, mobile app development Moradabad, best IT solutions company Moradabad, Zentrix Infotech",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/best-software-development-company-in-moradabad",
  },


  openGraph: {
    title:
      "Best Software Development Company in Moradabad | Zentrix",
    description:
      "Searching for the best software development company in Moradabad? See what to look for and why Zentrix Infotech, with 250+ projects, is a trusted choice.",
    url: "https://www.zentrixinfotech.com/moradabad/best-software-development-company-in-moradabad",
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
      "Best Software Development Company in Moradabad | Zentrix",
    description:
      "Searching for the best software development company in Moradabad? See what to look for and why Zentrix Infotech, with 250+ projects, is a trusted choice.",
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