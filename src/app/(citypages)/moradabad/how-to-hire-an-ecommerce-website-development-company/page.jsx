import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Hire an Ecommerce Website Development Company",
  description:
    "Learn how to hire an ecommerce website development company: what to check, questions to ask, red flags to avoid and how to compare quotes. Guide by Zentrix Infotech.",
  keywords:
    "how to hire an ecommerce website development company, how to choose an ecommerce development company, hire ecommerce website developer, ecommerce development company checklist, questions to ask ecommerce developer, ecommerce website development cost, ecommerce development agency vs freelancer, how to compare ecommerce development quotes, red flags when hiring web developer, best ecommerce development company, ecommerce website development India, ecommerce website development Moradabad, outsource ecommerce development, ecommerce project timeline, ecommerce development contract tips, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-hire-an-ecommerce-website-development-company",
  },

  openGraph: {
    title: "How to Hire an Ecommerce Website Development Company",
    description:
      "Learn how to hire an ecommerce website development company: what to check, questions to ask, red flags to avoid and how to compare quotes. Guide by Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-hire-an-ecommerce-website-development-company",
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
    title: "How to Hire an Ecommerce Website Development Company",
    description:
      "Learn how to hire an ecommerce website development company: what to check, questions to ask, red flags to avoid and how to compare quotes. Guide by Zentrix Infotech.",
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