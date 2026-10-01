import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose Personalized Software Solutions | Zentrix Infotech",
  description:
    "Not sure how to choose personalized software solutions? Follow this step-by-step guide to define needs, compare vendors and avoid costly mistakes.",
  keywords:
    "how to choose personalized software solutions, choosing custom software development company, personalized software selection guide, custom software vendor evaluation, tailor-made software solutions, how to select a software development partner, custom software for business, business software requirements, software development company in Moradabad, personalized software India, Zentrix Infotech",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/how-to-choose-personalized-software-solutions",
  },
  openGraph: {
    title: "How to Choose Personalized Software Solutions | Zentrix Infotech",
    description:
      "Not sure how to choose personalized software solutions? Follow this step-by-step guide to define needs, compare vendors and avoid costly mistakes.",
    url: "https://www.zentrixinfotech.com/how-to-choose-personalized-software-solutions",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose Personalized Software Solutions | Zentrix Infotech",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose Personalized Software Solutions | Zentrix Infotech",
    description:
      "Not sure how to choose personalized software solutions? Follow this step-by-step guide to define needs, compare vendors and avoid costly mistakes.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function HowToChoosePersonalizedSoftwareSolutionsPage() {
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
