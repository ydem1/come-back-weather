import React, { FC } from "react";
import { MyCitiesCards } from "src/page-components/my-cities/MyCitiesCards";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const MyCities: FC = () => (
  <PageWrapper>
    <MyCitiesCards />
  </PageWrapper>
);

export default MyCities;
