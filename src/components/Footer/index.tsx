import { Logo } from "../Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <footer>
    <div className="container flex items-center justify-between mt-5">
      <Logo />
      <SocialMediaLinks />
    </div>
  </footer>
);
