import { Logo } from "../Logo";
import { Navigation } from "./Navigation";

export const Header = () => (
  <header>
    <div className="container flex items-center justify-between my-5">
      <Logo />
      <Navigation />
    </div>
  </header>
);
