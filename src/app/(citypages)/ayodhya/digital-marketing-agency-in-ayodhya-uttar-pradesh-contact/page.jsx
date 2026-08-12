import Content from "./Content";
import Banner from "./Banner";
import Client from "@/components/Client";
import LovedByClients from "@/components/LovedByClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import LandingServices from "@/components/LandingServices";

export const metadata = {
  title:
    "Digital Marketing Agency in Ayodhya Uttar Pradesh Contact - Zentrix Infotech",
  description:
    "Find digital marketing agency in Ayodhya Uttar Pradesh contact details for Zentrix Infotech. Call, WhatsApp, or email to book a free consultation today.",
  keywords:
    "digital marketing agency in Ayodhya Uttar Pradesh contact, Zentrix Infotech contact number, Zentrix Infotech Ayodhya contact, digital marketing agency contact details Ayodhya, digital marketing company phone number Ayodhya, Zentrix Infotech email, contact digital marketing agency Uttar Pradesh, Zentrix Infotech WhatsApp, digital marketing agency address Ayodhya, reach Zentrix Infotech",
  alternates: {
    canonical:
      "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-ayodhya-uttar-pradesh-contact",
  },
  openGraph: {
    title:
      "Digital Marketing Agency in Ayodhya Uttar Pradesh Contact - Zentrix Infotech",
    description:
      "Find digital marketing agency in Ayodhya Uttar Pradesh contact details for Zentrix Infotech. Call, WhatsApp, or email to book a free consultation today.",
    url: "https://www.zentrixinfotech.com/ayodhya/digital-marketing-agency-ayodhya-uttar-pradesh-contact",
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
      "Digital Marketing Agency in Ayodhya Uttar Pradesh Contact - Zentrix Infotech",
    description:
      "Find digital marketing agency in Ayodhya Uttar Pradesh contact details for Zentrix Infotech. Call, WhatsApp, or email to book a free consultation today.",
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