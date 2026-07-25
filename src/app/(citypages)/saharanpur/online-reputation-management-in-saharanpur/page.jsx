import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  metadataBase: new URL("https://www.zentrixinfotech.com"),
  title: "Online Reputation Management in Saharanpur | Zentrix Infotech",
  description:
    "Zentrix Infotech offers expert online reputation management in Saharanpur — remove negative reviews, boost ratings & build trust that wins customers.",
  keywords:
    "online reputation management in Saharanpur, orm services saharanpur, reputation management company saharanpur, negative review removal saharanpur, google review management saharanpur, brand reputation management uttar pradesh, orm agency near me, online reputation management company india, reputation repair services saharanpur, business reputation management saharanpur, digital marketing agency saharanpur, remove negative content google, review management services india, personal branding saharanpur, crisis management services india, doctor reputation management saharanpur",
  alternates: {
    canonical: "https://www.zentrixinfotech.com/saharanpur/online-reputation-management-in-saharanpur",
  },
  openGraph: {
    title: "Online Reputation Management in Saharanpur | Zentrix Infotech",
    description:
      "Zentrix Infotech offers expert online reputation management in Saharanpur — remove negative reviews, boost ratings & build trust that wins customers.",
    url: "https://www.zentrixinfotech.com/saharanpur/online-reputation-management-in-saharanpur",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "/zentrix_logo.jpg",
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
    title: "Online Reputation Management in Saharanpur | Zentrix Infotech",
    description:
      "Zentrix Infotech offers expert online reputation management in Saharanpur — remove negative reviews, boost ratings & build trust that wins customers.",
    images: ["/zentrix_logo.jpg"],
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