import React, { FC } from "react";
import { AddCityForm } from "src/page-components/add-city/AddCityForm";
import { MyCities } from "src/page-components/add-city/MyCities";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const AddCity: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-10">
    <AddCityForm />
    <MyCities />
  </PageWrapper>
);

export default AddCity;
