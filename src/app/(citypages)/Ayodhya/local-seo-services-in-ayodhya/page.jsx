import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Local SEO Services in Ayodhya | Rank in Google Maps & Get More Local Customers",
  description:
    "Get found by tourists and locals with expert local SEO services in Ayodhya. Rank higher in Google Maps, boost reviews, and drive more calls, visits, and bookings.",
  keywords:
    "local SEO services in Ayodhya, local SEO company Ayodhya, Google Maps ranking Ayodhya, Google Business Profile optimization, local search marketing Ayodhya, near me SEO Ayodhya, local SEO for hotels, local citations Ayodhya, best local SEO agency, map pack ranking",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/ayodhya/local-seo-services-in-ayodhya",
  },
  openGraph: {
    title: "Local SEO Services in Ayodhya | Rank in Google Maps & Get More Local Customers",
    description:
      "Get found by tourists and locals with expert local SEO services in Ayodhya. Rank higher in Google Maps, boost reviews, and drive more calls, visits, and bookings.",
    url: "https://www.zentrixinfotech.com/ayodhya/local-seo-services-in-ayodhya",
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
    title: "Local SEO Services in Ayodhya | Rank in Google Maps & Get More Local Customers",
    description:
      "Get found by tourists and locals with expert local SEO services in Ayodhya. Rank higher in Google Maps, boost reviews, and drive more calls, visits, and bookings.",
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