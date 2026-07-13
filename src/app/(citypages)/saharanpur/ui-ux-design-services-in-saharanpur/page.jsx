import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "UI/UX Design Services in Saharanpur | Web & App Design",
  description:
    "Professional UI/UX design services in Saharanpur for websites & apps. User-focused, conversion-driven design. Free consultation — get a quote today!",
  keywords:
    "UI UX design company in Saharanpur, website design services Saharanpur, app UI design Saharanpur, user experience design agency Saharanpur, best UI UX designer near me, custom website UI design Saharanpur, UI UX design for startups Saharanpur, mobile app UI design company Saharanpur, affordable UI UX design services Saharanpur, ecommerce website design Saharanpur, UI UX design services for small business Saharanpur, best UI UX design company in Saharanpur UP, professional website redesign services Saharanpur, user interface design for wood handicraft business Saharanpur",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/saharanpur/ui-ux-design-services-saharanpur",
  },
  openGraph: {
    title: "UI/UX Design Services in Saharanpur | Web & App Design",
    description:
      "Professional UI/UX design services in Saharanpur for websites & apps. User-focused, conversion-driven design. Free consultation — get a quote today!",
    url: "https://www.zentrixinfotech.com/saharanpur/ui-ux-design-services-saharanpur",
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
    title: "UI/UX Design Services in Saharanpur | Web & App Design",
    description:
      "Professional UI/UX design services in Saharanpur for websites & apps. User-focused, conversion-driven design. Free consultation — get a quote today!",
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