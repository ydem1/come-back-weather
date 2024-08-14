import { SocialMediaLinks } from "./SocialMediaLinks";
import { Logo } from "../Logo";

export const Footer = () => (
  <footer>
    <div className="container flex items-center justify-between my-5">
      <Logo />
      <SocialMediaLinks />
    </div>
  </footer>
);
