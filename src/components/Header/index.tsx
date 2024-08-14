import { Navigation } from "./Navigation";
import { Logo } from "../Logo";

export const Header = () => (
  <header>
    <div className="container flex items-center justify-between py-5">
      <Logo />
      <Navigation />
    </div>
  </header>
);
