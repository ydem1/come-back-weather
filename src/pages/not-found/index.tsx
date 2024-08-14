import { Button } from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { PATHNAMES } from "src/constants/routes";

const NotFound: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-20">
    <section className="container">
      <h2>404 Not Found Page</h2>

      <p>
        Sorry, the page you are looking for doesn&#39;t exist. It might have
        been moved or deleted. Please click the button below to return to the
        homepage.
      </p>

      <Link className="block mt-5" to={PATHNAMES.HOME}>
        <Button variant="contained">Go Home</Button>
      </Link>
    </section>
  </PageWrapper>
);

export default NotFound;
