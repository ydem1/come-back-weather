import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { MyCitiesCards } from "src/page-components/my-cities/MyCitiesCards";

const MyCities: FC = () => (
  <PageWrapper>
    <MyCitiesCards />
  </PageWrapper>
);

export default MyCities;
