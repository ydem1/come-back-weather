import React, { FC } from "react";

export const AboutInfo: FC = () => (
  <section className="container flex flex-col gap-10 my-20">
    <h1 className="text-center">Welcome to the ComeBack Weather App!</h1>
    <p className="text-28">
      This progressive web application (SPA) is designed specifically for fast
      and convenient weather viewing in your selected cities. Our app offers:
      Up-to-date weather information: Receive the latest weather data for your
      chosen cities through integration with the Weather API. Convenient city
      cards: Quickly access brief weather information with the ability to view
      detailed data for each city. Instant weather updates: Refresh the weather
      information for each city with just one click. Manage your city list:
      Easily add new cities to your list and remove those you no longer need.
      Data persistence: Your city list and weather data are automatically saved
      in LocalStorage, so you’ll always have up-to-date information even after
      reloading the page.
    </p>
  </section>
);
