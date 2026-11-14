import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Improve Hospital SEO in Moradabad | 12-Step Guide",
  description:
    "Learn how to improve hospital SEO in Moradabad with a simple 12-step plan covering Google Maps, department pages, reviews and speed. Guide by Zentrix Infotech.",
  keywords:
    "how to improve hospital SEO Moradabad, improve hospital SEO, hospital SEO tips Moradabad, hospital Google Maps ranking, hospital website SEO checklist, department page SEO, hospital local SEO, get more patients from Google, hospital SEO steps, healthcare SEO Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/how-to-improve-hospital-seo-moradabad",
  },

  openGraph: {
    title: "How to Improve Hospital SEO in Moradabad | 12-Step Guide",
    description:
      "Learn how to improve hospital SEO in Moradabad with a simple 12-step plan covering Google Maps, department pages, reviews and speed. Guide by Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/moradabad/how-to-improve-hospital-seo-moradabad",
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
    title: "How to Improve Hospital SEO in Moradabad | 12-Step Guide",
    description:
      "Learn how to improve hospital SEO in Moradabad with a simple 12-step plan covering Google Maps, department pages, reviews and speed. Guide by Zentrix Infotech.",
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