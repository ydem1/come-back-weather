import { Logo } from "../Logo";
import { Navigation } from "./Navigation";

export const Header = () => (
  <header className="container m-5">
    <div className="flex items-center justify-between">
      <Logo />
      <Navigation />
    </div>
  </header>
);
