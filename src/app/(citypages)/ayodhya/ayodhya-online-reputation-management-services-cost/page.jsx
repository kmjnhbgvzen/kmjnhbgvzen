import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";


export const metadata = {
  title: "Ayodhya Online Reputation Management Services Cost 2026 | Full Pricing Guide",
  description:
    "Complete guide to Online Reputation Management (ORM) services cost in Ayodhya. Compare packages, pricing factors, and find the right ORM agency for your business.",
  keywords:
    "online reputation management services cost Ayodhya, ORM services Ayodhya, reputation management company Ayodhya, ORM cost India, online reputation management pricing, brand reputation management Ayodhya, ORM agency Ayodhya, reputation management services near me, negative review removal Ayodhya, digital marketing Ayodhya",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/ayodhya-online-reputation-management-services-cost",
  },
  openGraph: {
    title: "Ayodhya Online Reputation Management Services Cost 2026 | Full Pricing Guide",
    description:
      "Complete guide to Online Reputation Management (ORM) services cost in Ayodhya. Compare packages, pricing factors, and find the right ORM agency for your business.",
    url: "https://www.zentrixinfotech.com/ayodhya/ayodhya-online-reputation-management-services-cost",
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
    title: "Ayodhya Online Reputation Management Services Cost 2026 | Full Pricing Guide",
    description:
      "Complete guide to Online Reputation Management (ORM) services cost in Ayodhya. Compare packages, pricing factors, and find the right ORM agency for your business.",
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