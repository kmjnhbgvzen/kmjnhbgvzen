import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Software Development Company Reviews Moradabad | Zentrix",
  description:
    "Read what clients say about Zentrix Infotech, a software development company in Moradabad with 250+ projects and a 4.7/5 rating, and learn how to check reviews.",
  keywords:
    "software development company review Moradabad, software company reviews Moradabad, Zentrix Infotech reviews, Zentrix Infotech client feedback, best rated software company Moradabad, software development testimonials Moradabad, trusted software company Moradabad, IT company reviews Moradabad, software developers reviews Moradabad, client reviews software company, Zentrix Infotech Moradabad",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/software-development-company-review-moradabad",
  },


  openGraph: {
    title: "Software Development Company Reviews Moradabad | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech, a software development company in Moradabad with 250+ projects and a 4.7/5 rating, and learn how to check reviews.",
    url: "https://www.zentrixinfotech.com/moradabad/software-development-company-review-moradabad",
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
    title: "Software Development Company Reviews Moradabad | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech, a software development company in Moradabad with 250+ projects and a 4.7/5 rating, and learn how to check reviews.",
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