import React, { FC } from "react";
import { AddForm } from "./AddForm";
import { MyCities } from "./MyCities";

export const MainSection: FC = () => (
  <section className="container flex gap-10 ">
    <AddForm />
    <MyCities />
  </section>
);
