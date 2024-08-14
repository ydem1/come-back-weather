import React, { FC } from "react";
import { AboutInfo } from "src/page-components/home/AboutInfo";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-20">
    <AboutInfo />
  </PageWrapper>
);

export default Home;
