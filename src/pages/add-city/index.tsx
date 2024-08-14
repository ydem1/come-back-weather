import React, { FC } from "react";
import { MainSection } from "src/page-components/add-city/MainSection";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const AddCity: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-10 my-10">
    <MainSection />
  </PageWrapper>
);

export default AddCity;
