import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Web Development for Startups USA | Best Guide 2026",
  description:
    "Looking for web development for startups in USA? Discover the best strategies, tech stack, cost, and expert tips to build a scalable startup website in 2026.",
  keywords:
    "web development for startups USA, startup website development company, custom web development for startups, affordable web development USA, best web development company for startups, startup web design services, USA startup website builder, web app development for startups, MVP web development USA, hire web developers for startup",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/web-development-for-startups-usa",
  },
  openGraph: {
    title: "Web Development for Startups USA | Best Guide 2026",
    description:
      "Looking for web development for startups in USA? Discover the best strategies, tech stack, cost, and expert tips to build a scalable startup website in 2026.",
    url: "https://www.zentrixinfotech.com/usa/web-development-for-startups-usa",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development for Startups USA | Best Guide 2026",
    description:
      "Looking for web development for startups in USA? Discover the best strategies, tech stack, cost, and expert tips to build a scalable startup website in 2026.",
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