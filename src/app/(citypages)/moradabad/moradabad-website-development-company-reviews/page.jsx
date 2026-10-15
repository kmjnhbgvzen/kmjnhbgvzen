import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Moradabad Website Development Company Reviews | Zentrix",
  description:
    "Read what clients say about Zentrix Infotech, a Moradabad website development company with 250+ projects and a 4.7/5 rating. Learn how to judge reviews too.",
  keywords:
    "Moradabad website development company reviews, website development company reviews Moradabad, web development company reviews Moradabad, Zentrix Infotech reviews, Zentrix Infotech client testimonials, best website development company in Moradabad, trusted website developers Moradabad, website development company in Moradabad, website designing company Moradabad reviews, how to check web development company reviews, ecommerce website development Moradabad, web development services Moradabad",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-company-reviews",
  },

  openGraph: {
    title: "Moradabad Website Development Company Reviews | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech, a Moradabad website development company with 250+ projects and a 4.7/5 rating. Learn how to judge reviews too.",
    url: "https://www.zentrixinfotech.com/moradabad/moradabad-website-development-company-reviews",
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
    title: "Moradabad Website Development Company Reviews | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech, a Moradabad website development company with 250+ projects and a 4.7/5 rating. Learn how to judge reviews too.",
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