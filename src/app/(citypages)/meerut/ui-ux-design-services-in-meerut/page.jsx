import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "UI/UX Design Services in Meerut | Websites & Apps That Convert",
  description:
    "Looking for professional UI/UX design services in Meerut? We design intuitive, conversion-focused websites & app interfaces that improve user experience & boost sales. Get a free consultation today.",
  keywords:
    "UI/UX design services in Meerut, UI UX design company Meerut, website design agency Meerut, app design services Meerut, user experience design company, user interface design agency, UI UX design for startups Meerut, mobile app UI design Meerut, website redesign services, best UI UX agency Uttar Pradesh, product design company Meerut",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/meerut/ui-ux-design-services-in-meerut",
  },
  openGraph: {
    title: "UI/UX Design Services in Meerut | Websites & Apps That Convert",
    description:
      "Looking for professional UI/UX design services in Meerut? We design intuitive, conversion-focused websites & app interfaces that improve user experience & boost sales. Get a free consultation today.",
    url: "https://www.zentrixinfotech.com/meerut/ui-ux-design-services-in-meerut",
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
    title: "UI/UX Design Services in Meerut | Websites & Apps That Convert",
    description:
      "Looking for professional UI/UX design services in Meerut? We design intuitive, conversion-focused websites & app interfaces that improve user experience & boost sales. Get a free consultation today.",
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