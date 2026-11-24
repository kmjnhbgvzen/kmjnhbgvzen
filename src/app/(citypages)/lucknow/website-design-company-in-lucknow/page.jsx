import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Design Company in Lucknow | Zentrix Infotech",
  description:
    "Zentrix Infotech is a website design company in Lucknow creating fast, mobile-friendly, SEO-ready websites that bring enquiries. Talk to our experts today.",
  keywords:
    "website design company in lucknow, web design company lucknow, website designing services in lucknow, best website designer in lucknow, professional website design lucknow, custom website design lucknow, responsive website design lucknow, ecommerce website design lucknow, website redesign services lucknow, affordable website design lucknow, UI UX design company lucknow, business website design lucknow, SEO friendly website design lucknow, website design agency lucknow, website designers in lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/website-design-company-in-lucknow",
  },

  openGraph: {
    title: "Website Design Company in Lucknow | Zentrix Infotech",
    description:
      "Zentrix Infotech is a website design company in Lucknow creating fast, mobile-friendly, SEO-ready websites that bring enquiries. Talk to our experts today.",
    url: "https://www.zentrixinfotech.com/lucknow/website-design-company-in-lucknow",
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
    title: "Website Design Company in Lucknow | Zentrix Infotech",
    description:
      "Zentrix Infotech is a website design company in Lucknow creating fast, mobile-friendly, SEO-ready websites that bring enquiries. Talk to our experts today.",
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