import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Moradabad Software Company Reviews & Scorecard | Zentrix",
  description:
    "Compare Moradabad software development company reviews with our simple scorecard, reference-call questions and real client feedback on Zentrix Infotech. 4.7/5.",
  keywords:
    "Moradabad software development company reviews, software company reviews Moradabad, Zentrix Infotech reviews Moradabad, software company scorecard, how to check software company reviews, software company references questions, trusted software developers Moradabad, client feedback software company Moradabad, best reviewed IT company Moradabad, software development testimonials, Zentrix Infotech client feedback",


  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-reviews",
  },


  openGraph: {
    title: "Moradabad Software Company Reviews & Scorecard | Zentrix",
    description:
      "Compare Moradabad software development company reviews with our simple scorecard, reference-call questions and real client feedback on Zentrix Infotech. 4.7/5.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-software-development-company-reviews",
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
    title: "Moradabad Software Company Reviews & Scorecard | Zentrix",
    description:
      "Compare Moradabad software development company reviews with our simple scorecard, reference-call questions and real client feedback on Zentrix Infotech. 4.7/5.",
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