import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title: "Digital Marketing Company in Moradabad Reviews | Zentrix",
  description:
    "Read what clients say about Zentrix Infotech, a digital marketing company in Moradabad. See real feedback, results and how to check any agency's reviews.",
  keywords:
    "digital marketing company Moradabad reviews, digital marketing agency Moradabad reviews, Zentrix Infotech reviews, best digital marketing company in Moradabad, digital marketing company in Moradabad, client reviews digital marketing Moradabad, digital marketing agency testimonials Moradabad, trusted digital marketing agency Moradabad, SEO company Moradabad reviews, social media marketing Moradabad reviews, top rated digital marketing company Moradabad, Zentrix Infotech testimonials",

  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-moradabad-reviews",
  },

  openGraph: {
    title: "Digital Marketing Company in Moradabad Reviews | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech, a digital marketing company in Moradabad. See real feedback, results and how to check any agency's reviews.",
    url: "https://www.zentrixinfotech.com/moradabad/digital-marketing-company-moradabad-reviews",
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
    title: "Digital Marketing Company in Moradabad Reviews | Zentrix",
    description:
      "Read what clients say about Zentrix Infotech, a digital marketing company in Moradabad. See real feedback, results and how to check any agency's reviews.",
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