import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { CityItemSkeleton } from "src/page-components/city-item/CityItemSkeleton";
import { Header } from "src/page-components/city-item/Header";
import { Temperature } from "src/page-components/city-item/Temperature";
import { Wind } from "src/page-components/city-item/Wind";
import { getCurrentCityAsync } from "src/redux/currentCity/actions";
import { selectorCurrentCity } from "src/redux/currentCity/selector";

const CityItem: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { item, isLoading } = useAppSelector(selectorCurrentCity);

  useEffect(() => {
    dispatch(getCurrentCityAsync({ id }));
  }, [dispatch, id]);

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
