import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC & Google Ads Agency in Saharanpur | Certified Ad Management",
  description:
    "Get more leads with a results-driven PPC & Google Ads agency in Saharanpur. Search, Shopping, Display & retargeting campaigns managed for maximum ROI. Free audit.",
  keywords:
    "PPC agency in Saharanpur, Google Ads agency Saharanpur, PPC management Saharanpur, Google Ads management company Saharanpur, pay per click services Saharanpur, search engine marketing Saharanpur, Google Ads expert Saharanpur, PPC company UP, digital marketing agency Saharanpur, lead generation ads Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/cities/saharanpur/ppc-google-ads-agency-in-saharanpur",
  },
  openGraph: {
    title: "PPC & Google Ads Agency in Saharanpur | Certified Ad Management",
    description:
      "Get more leads with a results-driven PPC & Google Ads agency in Saharanpur. Search, Shopping, Display & retargeting campaigns managed for maximum ROI. Free audit.",
    url: "https://www.zentrixinfotech.com/saharanpur/ppc-google-ads-agency-in-saharanpur",
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
    title: "PPC & Google Ads Agency in Saharanpur | Certified Ad Management",
    description:
      "Get more leads with a results-driven PPC & Google Ads agency in Saharanpur. Search, Shopping, Display & retargeting campaigns managed for maximum ROI. Free audit.",
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