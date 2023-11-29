import "../css/tailwind.css";

import Background from "./components/Background.jsx";
import Footer from "./components/Footer.jsx";
export const metadata = {
  title: "Libertum",
  description:
    "Exploring freedom, technology, and innovation in our journey to a brighter future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Background />
        {children}
        <Footer />
      </body>
    </html>
  );
}
