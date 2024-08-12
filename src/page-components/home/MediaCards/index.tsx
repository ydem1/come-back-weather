import React, { FC } from "react";
import { MediaCard } from "./MediaCard";

export const MediaCards: FC = () => (
  <section className="container">
    <h2>All Card</h2>

    <div className="flex gap-5 py-5">
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </div>
  </section>
);
