import { Link } from "react-router-dom";
import logo from "src/assets/images/logo.png";
import { PATHNAMES } from "src/constants/routes";

const LOGO_IMAGE_ALT_TEXT = "Weather ComeBack";

export const Logo = () => (
  <Link
    className="flex gap-5 w-max bg-blue-500 p-2 xs:px-5 xs:py-3 text-28 text-white rounded-lg"
    to={PATHNAMES.HOME}
  >
    <img className="w-10" src={logo} alt={LOGO_IMAGE_ALT_TEXT} />

    <span className="hidden lg:block">Weather ComeBack</span>
  </Link>
);
