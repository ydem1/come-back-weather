import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getCurrentCityAsync } from "src/redux/currentCity/actions";
import { selectorCurrentCity } from "src/redux/currentCity/selector";
import { CityItemSkeleton } from "src/page-components/city-item/CityItemSkeleton";
import { Header } from "src/page-components/city-item/Header";
import { Temperature } from "src/page-components/city-item/Temperature";
import { Wind } from "src/page-components/city-item/Wind";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const CityItem: FC = () => {
  const { lat, lon } = useParams();

  const dispatch = useAppDispatch();
  const { item, isLoading } = useAppSelector(selectorCurrentCity);

  useEffect(() => {
    dispatch(
      getCurrentCityAsync({
        lat: +lat,
        lon: +lon,
      })
    );
  }, [dispatch, lat, lon]);

  if (!item && !isLoading) {
    return null;
  }

  return isLoading ? (
    <CityItemSkeleton />
  ) : (
    <PageWrapper mainClassName="flex flex-col gap-5">
      <Header cityName={item.name} {...item.weather[0]} />
      <Temperature {...item.main} />
      <Wind {...item.wind} />
    </PageWrapper>
  );
};
export default CityItem;
