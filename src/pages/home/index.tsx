import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { MediaCards } from "src/page-components/home/MediaCards";

const Home: FC = () => (
  <PageWrapper>
    <MediaCards />
  </PageWrapper>
);

export default Home;
