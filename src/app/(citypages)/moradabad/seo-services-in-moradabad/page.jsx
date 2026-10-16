import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Services in Moradabad | Rank Higher on Google | Zentrix",
  description:
    "Zentrix Infotech offers result-driven SEO services in Moradabad, including local SEO, technical SEO and content. Get found on Google and win more leads.",
  keywords:
    "SEO services in Moradabad, SEO company Moradabad, SEO agency Moradabad, best SEO services in Moradabad, local SEO Moradabad, affordable SEO services Moradabad, technical SEO services Moradabad, on-page SEO Moradabad, off-page SEO Moradabad, SEO for small business Moradabad, Google ranking services Moradabad, e-commerce SEO Moradabad, SEO expert Moradabad, digital marketing company in Moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/seo-services-in-moradabad",
  },

  openGraph: {
    title: "SEO Services in Moradabad | Rank Higher on Google | Zentrix",
    description:
      "Zentrix Infotech offers result-driven SEO services in Moradabad, including local SEO, technical SEO and content. Get found on Google and win more leads.",
    url: "https://www.zentrixinfotech.com/moradabad/seo-services-in-moradabad",
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
    title: "SEO Services in Moradabad | Rank Higher on Google | Zentrix",
    description:
      "Zentrix Infotech offers result-driven SEO services in Moradabad, including local SEO, technical SEO and content. Get found on Google and win more leads.",
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