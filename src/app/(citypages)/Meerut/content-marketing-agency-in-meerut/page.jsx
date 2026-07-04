import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Content Marketing Agency in Meerut | Strategy, Writing & SEO Content",
  description:
    "Partner with a content marketing agency in Meerut for SEO-driven blogs, website copy, social content & strategy that builds trust and drives consistent leads.",
  keywords:
    "content marketing agency in Meerut, content writing services Meerut, SEO content agency Meerut, blog writing services Meerut, content strategy company Meerut, digital content agency Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/content-marketing-agency-in-meerut",
  },
  openGraph: {
    title: "Content Marketing Agency in Meerut | Strategy, Writing & SEO Content",
    description:
      "Partner with a content marketing agency in Meerut for SEO-driven blogs, website copy, social content & strategy that builds trust and drives consistent leads.",
    url: "https://www.zentrixinfotech.com/meerut/content-marketing-agency-in-meerut",
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
    title: "Content Marketing Agency in Meerut | Strategy, Writing & SEO Content",
    description:
      "Partner with a content marketing agency in Meerut for SEO-driven blogs, website copy, social content & strategy that builds trust and drives consistent leads.",
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