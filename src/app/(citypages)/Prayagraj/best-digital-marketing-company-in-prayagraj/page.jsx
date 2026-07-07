import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Best Digital Marketing Company in Prayagraj | Zentrix Infotech",
  description:
    "Searching for the best digital marketing company in Prayagraj? Zentrix Infotech offers SEO, PPC, social media & web development to help your business grow online. Get a free consultation.",
  keywords:
    "best digital marketing company in Prayagraj, digital marketing agency Prayagraj, top digital marketing services Prayagraj, online marketing company Prayagraj, digital marketing experts Prayagraj, affordable digital marketing Prayagraj, digital marketing consultant Prayagraj, internet marketing company Prayagraj",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/prayagraj/best-digital-marketing-company-in-prayagraj",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Prayagraj | Zentrix Infotech",
    description:
      "Searching for the best digital marketing company in Prayagraj? Zentrix Infotech offers SEO, PPC, social media & web development to help your business grow online. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/prayagraj/best-digital-marketing-company-in-prayagraj",
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
    title: "Best Digital Marketing Company in Prayagraj | Zentrix Infotech",
    description:
      "Searching for the best digital marketing company in Prayagraj? Zentrix Infotech offers SEO, PPC, social media & web development to help your business grow online. Get a free consultation.",
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