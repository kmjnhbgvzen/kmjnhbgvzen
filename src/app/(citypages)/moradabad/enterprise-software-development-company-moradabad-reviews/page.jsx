import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Enterprise Software Company Moradabad Reviews | Zentrix",
  description:
    "Read what clients say about Zentrix Infotech and learn how to judge reviews of an enterprise software development company in Moradabad. Rated 4.7 out of 5.",
  keywords:
    "enterprise software development company moradabad reviews, enterprise software company moradabad reviews, zentrix infotech reviews, software company reviews moradabad, enterprise software developer reviews moradabad, client testimonials software company moradabad, best enterprise software company moradabad, enterprise software development moradabad, trusted software company moradabad, how to check software company reviews, enterprise application development moradabad, Zentrix Infotech",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-moradabad-reviews",
  },

  openGraph: {
    title: "Enterprise Software Company Moradabad Reviews | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech and learn how to judge reviews of an enterprise software development company in Moradabad. Rated 4.7 out of 5.",
    url: "https://www.zentrixinfotech.com/moradabad/enterprise-software-development-company-moradabad-reviews",
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
    title: "Enterprise Software Company Moradabad Reviews | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech and learn how to judge reviews of an enterprise software development company in Moradabad. Rated 4.7 out of 5.",
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