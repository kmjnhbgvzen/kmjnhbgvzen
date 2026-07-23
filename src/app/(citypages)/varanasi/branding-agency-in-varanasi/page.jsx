import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Branding Agency in Varanasi | Build a Powerful Brand",
  description:
    "Top branding agency in Varanasi offering logo design, brand strategy, identity, and packaging. Build a brand customers trust. Get a free consultation.",
  keywords:
    "branding agency in Varanasi, brand identity design Varanasi, logo design company Varanasi, brand strategy agency Varanasi, corporate branding Varanasi, packaging design company Varanasi, best branding company in UP, brand consultants Varanasi, business branding services Varanasi",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/varanasi/branding-agency-in-varanasi",
  },
  openGraph: {
    title: "Branding Agency in Varanasi | Build a Powerful Brand",
    description:
      "Top branding agency in Varanasi offering logo design, brand strategy, identity, and packaging. Build a brand customers trust. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/varanasi/branding-agency-in-varanasi",
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
    title: "Branding Agency in Varanasi | Build a Powerful Brand",
    description:
      "Top branding agency in Varanasi offering logo design, brand strategy, identity, and packaging. Build a brand customers trust. Get a free consultation.",
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