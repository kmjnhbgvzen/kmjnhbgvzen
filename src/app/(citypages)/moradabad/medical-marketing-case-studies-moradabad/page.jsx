import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Medical Marketing Case Studies Moradabad | Zentrix Infotech",
  description:
    "Read medical marketing case studies from Moradabad. See how Zentrix Infotech helps hospitals and pharmacies get more patient enquiries through Google and social media.",
  keywords:
    "medical marketing case studies Moradabad, healthcare marketing case study, hospital marketing case study Moradabad, pharmacy marketing success story, doctor marketing results Moradabad, healthcare digital marketing results, patient enquiry growth case study, local SEO case study healthcare, medical marketing portfolio Moradabad, hospital website case study, Zentrix Infotech healthcare",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/medical-marketing-case-studies-moradabad",
  },

  openGraph: {
    title: "Medical Marketing Case Studies Moradabad | Zentrix Infotech",
    description:
      "Read medical marketing case studies from Moradabad. See how Zentrix Infotech helps hospitals and pharmacies get more patient enquiries through Google and social media.",
    url: "https://www.zentrixinfotech.com/moradabad/medical-marketing-case-studies-moradabad",
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
    title: "Medical Marketing Case Studies Moradabad | Zentrix Infotech",
    description:
      "Read medical marketing case studies from Moradabad. See how Zentrix Infotech helps hospitals and pharmacies get more patient enquiries through Google and social media.",
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