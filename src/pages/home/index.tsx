import React, { FC } from "react";
import { Header } from "src/components/Header";
import { MediaCards } from "src/page-components/home/MediaCards";

const Home: FC = () => (
  <main>
    <Header />
    <MediaCards />
  </main>
);

export default Home;
