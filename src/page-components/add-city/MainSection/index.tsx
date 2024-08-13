import React, { FC } from "react";
import { AddForm } from "./AddForm";
import { MyCitiesList } from "./MyCitiesList";

export const MainSection: FC = () => (
  <section className="container flex gap-10 ">
    <AddForm />
    <MyCitiesList />
  </section>
);
