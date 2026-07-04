import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Meerut | Custom Web Design",
  description:
    "Looking for a website development company in Meerut? Get custom website design, e-commerce development, and responsive web solutions built to grow your business online.",
  keywords:
    "website development company in Meerut, web design company Meerut, best website developer Meerut, e-commerce website development Meerut, custom website design Meerut, responsive web design Meerut, affordable website development UP, business website company Meerut, WordPress developer Meerut, web development services Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/website-development-company-in-meerut",
  },
  openGraph: {
    title: "Website Development Company in Meerut | Custom Web Design",
    description:
      "Looking for a website development company in Meerut? Get custom website design, e-commerce development, and responsive web solutions built to grow your business online.",
    url: "https://www.zentrixinfotech.com/meerut/website-development-company-in-meerut",
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
    title: "Website Development Company in Meerut | Custom Web Design",
    description:
      "Looking for a website development company in Meerut? Get custom website design, e-commerce development, and responsive web solutions built to grow your business online.",
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