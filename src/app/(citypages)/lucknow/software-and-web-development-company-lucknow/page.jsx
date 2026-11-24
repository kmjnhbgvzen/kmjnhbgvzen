import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Software and Web Development Company in Lucknow | Zentrix",
  description:
    "Zentrix Infotech is a software and web development company serving Lucknow with custom software, websites, apps and cloud solutions. Talk to our team today.",
  keywords:
    "software and web development company lucknow, software development company in lucknow, web development company in lucknow, custom software development lucknow, website development company lucknow, web application development lucknow, business software development lucknow, ecommerce website development lucknow, mobile app development lucknow, IT solutions company lucknow, software company in lucknow, best web development company lucknow, custom website development lucknow, enterprise software development lucknow, software and website developers lucknow, cloud solutions lucknow",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/lucknow/software-and-web-development-company-lucknow",
  },

  openGraph: {
    title:
      "Software and Web Development Company in Lucknow | Zentrix",
    description:
      "Zentrix Infotech is a software and web development company serving Lucknow with custom software, websites, apps and cloud solutions. Talk to our team today.",
    url: "https://www.zentrixinfotech.com/lucknow/software-and-web-development-company-lucknow",
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
    title:
      "Software and Web Development Company in Lucknow | Zentrix",
    description:
      "Zentrix Infotech is a software and web development company serving Lucknow with custom software, websites, apps and cloud solutions. Talk to our team today.",
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