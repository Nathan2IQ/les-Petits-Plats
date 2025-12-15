import footerStyles from "./Footer.module.scss";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  return (
    <footer className={footerStyles.footer + " " + manrope.className}>
      <p>Copyright © 2025 - Les Petits Plats</p>
    </footer>
  );
}
