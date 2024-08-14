import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { AboutInfo } from "src/page-components/home/AboutInfo";

const Home: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-20">
    <AboutInfo />
  </PageWrapper>
);

export default Home;
