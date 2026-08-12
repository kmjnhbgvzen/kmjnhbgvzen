import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Company in Ghaziabad 2026 | Zentrix Infotech",
  description:
    "Looking for the best digital marketing company in Ghaziabad? Get SEO, PPC, social media & web design services that deliver real ROI. 4.7/5 rated agency. Free consultation.",
  keywords:
    "best digital marketing company in Ghaziabad, digital marketing agency Ghaziabad, SEO company in Ghaziabad, top digital marketing services Ghaziabad, social media marketing company Ghaziabad, PPC agency Ghaziabad, affordable digital marketing company Ghaziabad, local SEO services Ghaziabad, web development and digital marketing company Ghaziabad, best SEO company near me, digital marketing agency for small business Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/best-digital-marketing-company-in-ghaziabad",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Ghaziabad 2026 | Zentrix Infotech",
    description:
      "Looking for the best digital marketing company in Ghaziabad? Get SEO, PPC, social media & web design services that deliver real ROI. 4.7/5 rated agency. Free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/best-digital-marketing-company-in-ghaziabad",
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
    title: "Best Digital Marketing Company in Ghaziabad 2026 | Zentrix Infotech",
    description:
      "Looking for the best digital marketing company in Ghaziabad? Get SEO, PPC, social media & web design services that deliver real ROI. 4.7/5 rated agency. Free consultation.",
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