import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "PPC & Google Ads Agency in Ayodhya | Get Instant Leads & Bookings",
  description:
    "Hire a results-driven PPC and Google Ads agency in Ayodhya to get instant visibility, more bookings, and quality leads with expertly managed ad campaigns.",
  keywords:
    "PPC agency in Ayodhya, Google Ads agency Ayodhya, PPC services Ayodhya, Google Ads management Ayodhya, pay per click marketing Ayodhya, Facebook ads agency Ayodhya, paid advertising company Ayodhya, lead generation Ayodhya, hotel PPC ads, best PPC company near me",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/ppc-google-ads-agency-in-ayodhya",
  },
  openGraph: {
    title: "PPC & Google Ads Agency in Ayodhya | Get Instant Leads & Bookings",
    description:
      "Hire a results-driven PPC and Google Ads agency in Ayodhya to get instant visibility, more bookings, and quality leads with expertly managed ad campaigns.",
    url: "https://www.zentrixinfotech.com/ayodhya/ppc-google-ads-agency-in-ayodhya",
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
    title: "PPC & Google Ads Agency in Ayodhya | Get Instant Leads & Bookings",
    description:
      "Hire a results-driven PPC and Google Ads agency in Ayodhya to get instant visibility, more bookings, and quality leads with expertly managed ad campaigns.",
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