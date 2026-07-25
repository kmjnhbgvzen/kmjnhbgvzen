import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Online Reputation Management in Bareilly | Build Trust & Rankings",
  description:
    "Protect and grow your brand with expert online reputation management in Bareilly — fix negative reviews, build positive Google ratings and boost customer trust.",
  keywords:
    "online reputation management in Bareilly, ORM services Bareilly, reputation management agency Bareilly, negative review removal, Google review management, brand reputation management India, ORM company Bareilly, online reputation repair, business reputation management, local SEO and reputation management, best ORM agency Bareilly",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/bareilly/online-reputation-management-in-bareilly",
  },

  openGraph: {
    title: "Online Reputation Management in Bareilly | Build Trust & Rankings",
    description:
      "Protect and grow your brand with expert online reputation management in Bareilly — fix negative reviews, build positive Google ratings and boost customer trust.",
    url: "https://www.zentrixinfotech.com/bareilly/online-reputation-management-in-bareilly",
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
    title: "Online Reputation Management in Bareilly | Build Trust & Rankings",
    description:
      "Protect and grow your brand with expert online reputation management in Bareilly — fix negative reviews, build positive Google ratings and boost customer trust.",
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