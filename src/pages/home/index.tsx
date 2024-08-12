import React, { FC } from "react";
import { MediaCard } from "src/components/MediaCard";

const Home: FC = () => (
  <main>
    <section className="container">
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </section>
  </main>
);

export default Home;
