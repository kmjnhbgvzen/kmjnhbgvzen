import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Google Ads for Interior Designers in Dubai | Consultation & Lead Experts",
  description:
    "Get more consultation bookings with Google Ads for interior designers in Dubai. Portfolio-driven campaigns built to attract qualified villa & apartment clients.",
  keywords:
    "google ads for interior designers in dubai, interior design ppc dubai, interior design marketing agency dubai, google ads for interior design firms uae, villa interior design ads dubai, home renovation marketing dubai, luxury interior design advertising dubai, interior design lead generation dubai, interior designer google ads uae, design studio marketing dubai",

  alternates: {
    canonical: "https://www.zentrixinfotech.com/dubai/google-ads-interior-designers-dubai",
  },

  openGraph: {
    title: "Google Ads for Interior Designers in Dubai | Consultation & Lead Experts",
    description:
      "Get more consultation bookings with Google Ads for interior designers in Dubai. Portfolio-driven campaigns built to attract qualified villa & apartment clients.",
    url: "https://www.zentrixinfotech.com/dubai/google-ads-interior-designers-dubai",
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
    title: "Google Ads for Interior Designers in Dubai | Consultation & Lead Experts",
    description:
      "Get more consultation bookings with Google Ads for interior designers in Dubai. Portfolio-driven campaigns built to attract qualified villa & apartment clients.",
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