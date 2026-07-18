import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "SEO Agency for Startups in USA | Affordable Growth-Focused SEO",
  description:
    "Find the right SEO agency for startups in the USA. Get lean, growth-focused SEO strategies built for limited budgets, fast iteration, and early traction.",
  keywords:
    "SEO agency for startups USA, startup SEO services, SEO for early stage startups, growth SEO agency, startup SEO company, SEO for SaaS startups, lean SEO strategy, best SEO agency for startups, affordable startup SEO, startup marketing SEO",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/usa/seo-agency-for-startups-usa",
  },
  openGraph: {
    title:
      "SEO Agency for Startups in USA | Affordable Growth-Focused SEO",
    description:
      "Find the right SEO agency for startups in the USA. Get lean, growth-focused SEO strategies built for limited budgets, fast iteration, and early traction.",
    url: "https://www.zentrixinfotech.com/usa/seo-agency-for-startups-usa",
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
      "SEO Agency for Startups in USA | Affordable Growth-Focused SEO",
    description:
      "Find the right SEO agency for startups in the USA. Get lean, growth-focused SEO strategies built for limited budgets, fast iteration, and early traction.",
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