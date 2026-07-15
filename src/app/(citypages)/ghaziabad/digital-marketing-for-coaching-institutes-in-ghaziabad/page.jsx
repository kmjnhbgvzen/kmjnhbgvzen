import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing for Coaching Institutes in Ghaziabad | Zentrix Infotech",
  description:
    "Result-driven digital marketing for coaching institutes in Ghaziabad to boost student admissions, batch enrollments, and online visibility. Get a free consultation.",
  keywords:
    "digital marketing for coaching institutes in Ghaziabad, coaching institute marketing agency Ghaziabad, coaching centre digital marketing Ghaziabad, coaching institute SEO Ghaziabad, student admission marketing Ghaziabad, best digital marketing company for coaching institutes Ghaziabad, coaching institute website design Ghaziabad, education marketing services near me, coaching centre lead generation Ghaziabad, competitive exam coaching marketing Ghaziabad, coaching institute branding agency Ghaziabad, tuition centre marketing Ghaziabad",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-coaching-institutes-ghaziabad",
  },
  openGraph: {
    title: "Digital Marketing for Coaching Institutes in Ghaziabad | Zentrix Infotech",
    description:
      "Result-driven digital marketing for coaching institutes in Ghaziabad to boost student admissions, batch enrollments, and online visibility. Get a free consultation.",
    url: "https://www.zentrixinfotech.com/ghaziabad/digital-marketing-coaching-institutes-ghaziabad",
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
    title: "Digital Marketing for Coaching Institutes in Ghaziabad | Zentrix Infotech",
    description:
      "Result-driven digital marketing for coaching institutes in Ghaziabad to boost student admissions, batch enrollments, and online visibility. Get a free consultation.",
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