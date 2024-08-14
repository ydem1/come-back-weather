import React, { FC } from "react";
import { AddForm } from "./AddForm";
import { MyCitiesList } from "./MyCitiesList";

export const MainSection: FC = () => (
  <section className="container flex flex-col lg:flex-row gap-10 ">
    <AddForm />
    <MyCitiesList />
  </section>
);
