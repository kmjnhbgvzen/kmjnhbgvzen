import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "How to Choose a Web Design Agency in Lucknow | Zentrix",
  description:
    "Not sure how to choose a web design agency in Lucknow? Use this practical guide to compare portfolios, pricing, SEO skills and support before you hire.",
  keywords:
    "how to choose a web design agency in Lucknow, web design agency in Lucknow, website design company Lucknow, best web design company in Lucknow, web designer Lucknow, website design cost Lucknow, hire web design agency Lucknow, web design and development Lucknow, responsive website design Lucknow, UI UX design agency Lucknow, questions to ask a web design agency, web design agency checklist, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/how-to-choose-a-web-design-agency-in-lucknow",
  },

  openGraph: {
    title: "How to Choose a Web Design Agency in Lucknow | Zentrix",
    description:
      "Not sure how to choose a web design agency in Lucknow? Use this practical guide to compare portfolios, pricing, SEO skills and support before you hire.",
    url: "https://www.zentrixinfotech.com/lucknow/how-to-choose-a-web-design-agency-in-lucknow",
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
    title: "How to Choose a Web Design Agency in Lucknow | Zentrix",
    description:
      "Not sure how to choose a web design agency in Lucknow? Use this practical guide to compare portfolios, pricing, SEO skills and support before you hire.",
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