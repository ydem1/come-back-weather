import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const CityItem: FC = () => {
  const { id } = useParams();

  return (
    <PageWrapper mainClassName="flex flex-col gap-20">
      <section className="container">
        <h2>CityItem with id {id}</h2>
      </section>
    </PageWrapper>
  );
};
export default CityItem;
