import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Development Company Reviews Guide | Zentrix",
  description:
    "Learn how to read enterprise software development company reviews, spot red flags, verify claims and choose a trusted partner. Practical guide by Zentrix Infotech.",
  keywords:
    "enterprise software development company reviews, software development company reviews, best enterprise software development company, how to choose software development company, custom software development company reviews, software company ratings India, enterprise software vendor evaluation, client testimonials software company, software development company India, Zentrix Infotech reviews",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/enterprise-software-development-company-reviews",
  },
  openGraph: {
    title: "Enterprise Software Development Company Reviews Guide | Zentrix",
    description:
      "Learn how to read enterprise software development company reviews, spot red flags, verify claims and choose a trusted partner. Practical guide by Zentrix Infotech.",
    url: "https://www.zentrixinfotech.com/enterprise-software-development-company-reviews",
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
    title: "Enterprise Software Development Company Reviews Guide | Zentrix",
    description:
      "Learn how to read enterprise software development company reviews, spot red flags, verify claims and choose a trusted partner. Practical guide by Zentrix Infotech.",
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
