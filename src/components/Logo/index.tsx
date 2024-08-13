import { Link } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";

const LOGO_IMAGE_ALT_TEXT = "Weather ComeBack";

export const Logo = () => (
  <Link
    className="flex gap-5 w-max bg-blue-500 px-5 py-3 text-28 text-white rounded-lg"
    to={PATHNAMES.HOME}
  >
    <img className="w-10" src="./images/logo.png" alt={LOGO_IMAGE_ALT_TEXT} />

    <span>Weather ComeBack</span>
  </Link>
);
