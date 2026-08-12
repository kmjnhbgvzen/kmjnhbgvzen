import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Services in Ayodhya - Zentrix Infotech",
  description:
    "Get the best digital marketing services in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services that drive real business growth. Get a free consultation today.",
  keywords:
    "best digital marketing services in Ayodhya, best digital marketing agency Ayodhya, top digital marketing services Ayodhya, best SEO services Ayodhya, best PPC services Ayodhya, best social media marketing Ayodhya, digital marketing packages Ayodhya, Zentrix Infotech Ayodhya, best online marketing services Ayodhya, top marketing company Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/best-digital-marketing-services-in-ayodhya",
  },
  openGraph: {
    title: "Best Digital Marketing Services in Ayodhya - Zentrix Infotech",
    description:
      "Get the best digital marketing services in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services that drive real business growth. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/best-digital-marketing-services-in-ayodhya",
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
    title: "Best Digital Marketing Services in Ayodhya - Zentrix Infotech",
    description:
      "Get the best digital marketing services in Ayodhya. Zentrix Infotech offers SEO, PPC, social media, and website services that drive real business growth. Get a free consultation today.",
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