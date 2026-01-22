import Content from "./Content";

export const metadata = {
  title: "Support | Zentrix Infotech",

  description:
    "Get help and support from Zentrix Infotech. Contact our team for technical assistance, service inquiries, and customer support.",

  keywords: [
    "zentrix infotech support",
    "zentrix infotech help",
    "customer support zentrix infotech",
    "technical support services",
    "IT support zentrix infotech",
    "contact support team",
    "business IT support"
  ],

  alternates: {
    canonical: "https://www.zentrixinfotech.com/support",
  },

  openGraph: {
    title: "Support | Zentrix Infotech",
    description:
      "Need assistance? Reach out to Zentrix Infotech support for reliable help and technical guidance.",
    url: "https://www.zentrixinfotech.com/support",
    siteName: "Zentrix Infotech",
    images: [
      {
        url: "https://www.zentrixinfotech.com/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zentrix Infotech Support",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Support | Zentrix Infotech",
    description:
      "Contact Zentrix Infotech support for service-related queries and technical assistance.",
    images: ["https://www.zentrixinfotech.com/zentrix_logo.jpg"],
  },

  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <>
      <Content />
    </>
  );
}
