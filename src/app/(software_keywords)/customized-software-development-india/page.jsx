import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Customized Software Development India | Zentrix Infotech",
  description:
    "Get customized software development in India built around your workflows. Zentrix Infotech delivers scalable, secure custom software for startups and enterprises.",
  keywords:
    "customized software development India, custom software development company India, bespoke software development India, tailor-made software solutions, custom software development services, customized business software, custom enterprise software India, custom software developers India, software development company Moradabad, software development company Ghaziabad, custom web application development, custom software development for startups, affordable custom software development India, scalable software solutions, Zentrix Infotech",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/customized-software-development-india",
  },
  openGraph: {
    title: "Customized Software Development India | Zentrix Infotech",
    description:
      "Get customized software development in India built around your workflows. Zentrix Infotech delivers scalable, secure custom software for startups and enterprises.",
    url: "https://www.zentrixinfotech.com/customized-software-development-india",
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
    title: "Customized Software Development India | Zentrix Infotech",
    description:
      "Get customized software development in India built around your workflows. Zentrix Infotech delivers scalable, secure custom software for startups and enterprises.",
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
