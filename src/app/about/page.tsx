export const metadata = {
  title: "About Bombay Yacht | Luxury Yacht Rentals in Mumbai",
  description:
    "Bombay Yacht offers luxury yacht rentals in Mumbai. Established in September, we craft unforgettable experiences for birthdays, proposals, corporate events and more.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bombay Yacht",
    description:
      "Luxury yacht charters in Mumbai for birthdays, anniversaries, proposals and corporate events.",
    url: "/about",
    siteName: "Bombay Yacht",
    type: "website",
  },
};

import AboutClient from "./AboutClient";

export default function AboutPage() {
  return <AboutClient />;
}
