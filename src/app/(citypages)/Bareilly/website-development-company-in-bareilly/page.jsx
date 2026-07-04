import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Website Development Company in Bareilly | Custom Web Design",
  description:
    "Looking for a website development company in Bareilly? Get custom website design, e-commerce development, and responsive web solutions built to grow your business online.",
  keywords:
    "website development company in Bareilly, web design company Bareilly, best website developer Bareilly, e-commerce website development Bareilly, custom website design Bareilly, responsive web design Bareilly, affordable website development UP, business website company Bareilly, WordPress developer Bareilly, web development services Bareilly",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/website-development-company-in-bareilly",
  },
  openGraph: {
    title: "Website Development Company in Bareilly | Custom Web Design",
    description:
      "Looking for a website development company in Bareilly? Get custom website design, e-commerce development, and responsive web solutions built to grow your business online.",
    url: "https://www.zentrixinfotech.com/bareilly/website-development-company-in-bareilly",
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
    title: "Website Development Company in Bareilly | Custom Web Design",
    description:
      "Looking for a website development company in Bareilly? Get custom website design, e-commerce development, and responsive web solutions built to grow your business online.",
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