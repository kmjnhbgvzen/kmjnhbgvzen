import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Custom ERP Development Company Reviews Guide | Zentrix",

  description:
    "How to read custom ERP development company reviews, spot fake ones and verify a vendor before hiring. See what clients say about Zentrix Infotech.",

  keywords:
    "custom ERP development company reviews, ERP development company reviews India, best custom ERP company reviews, ERP vendor reviews, how to check ERP company reviews, ERP developer ratings, ERP company testimonials, fake reviews ERP company, ERP development company feedback, trusted ERP development company, custom ERP software company India, ERP company client reviews, Zentrix Infotech reviews",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/custom-erp-development-company-reviews",
  },

  openGraph: {
    title: "Custom ERP Development Company Reviews Guide | Zentrix",

    description:
      "How to read custom ERP development company reviews, spot fake ones and verify a vendor before hiring. See what clients say about Zentrix Infotech.",

    url: "https://www.zentrixinfotech.com/custom-erp-development-company-reviews",

    siteName: "Zentrix Infotech",

    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom ERP Development Company Reviews Guide | Zentrix Infotech",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Custom ERP Development Company Reviews Guide | Zentrix",

    description:
      "How to read custom ERP development company reviews, spot fake ones and verify a vendor before hiring. See what clients say about Zentrix Infotech.",

    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <main>
      <Banner />
      <Client />
      <Content />
      <WhyChooseUs />
      <LandingServices />
      <Portfolio />
      <LovedByClients />
    </main>
  );
}
