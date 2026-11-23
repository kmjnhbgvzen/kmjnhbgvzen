import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Web Development Company in Lucknow | Zentrix Infotech",

  description:
    "Searching for the best web development company in Lucknow? Learn how to choose one, and see how Zentrix Infotech builds fast, SEO-ready websites. Get a quote.",

  keywords:
    "Best Web Development Company in Lucknow, top web development company in Lucknow, best website development company in Lucknow, best website developers in Lucknow, best web development services in Lucknow, professional web development company in Lucknow, custom web development company in Lucknow, affordable web development company in Lucknow, best website designing company in Lucknow, best ecommerce website development in Lucknow, web development company near me Lucknow, trusted web development company in Lucknow, how to choose a web development company in Lucknow, web development company comparison, web development company checklist, questions to ask a web developer, red flags when hiring a web developer, how to verify a web development portfolio, website development cost in Lucknow, SEO-friendly website development, post-launch website support",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/best-web-development-company-in-lucknow",
  },

  openGraph: {
    title: "Best Web Development Company in Lucknow | Zentrix Infotech",
    description:
      "Searching for the best web development company in Lucknow? Learn how to choose one, and see how Zentrix Infotech builds fast, SEO-ready websites. Get a quote.",
    url:
      "https://www.zentrixinfotech.com/lucknow/best-web-development-company-in-lucknow",
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
    title: "Best Web Development Company in Lucknow | Zentrix Infotech",
    description:
      "Searching for the best web development company in Lucknow? Learn how to choose one, and see how Zentrix Infotech builds fast, SEO-ready websites. Get a quote.",
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