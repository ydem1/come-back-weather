import React, { FC } from "react";
import { AboutInfo } from "src/page-components/home/AboutInfo";
import { HomeCards } from "src/page-components/home/HomeCards";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-20">
    <AboutInfo />
    <HomeCards />
  </PageWrapper>
);

export default Home;
