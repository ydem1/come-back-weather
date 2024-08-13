import React, { FC } from "react";
import { MainSection } from "src/page-components/add-city/MainSection";
import { PopularCities } from "src/page-components/add-city/PopularCities";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const AddCity: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-10 mt-10">
    <MainSection />
    <PopularCities />
  </PageWrapper>
);

export default AddCity;
