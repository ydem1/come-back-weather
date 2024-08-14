import React, { FC } from "react";
import { Skeleton } from "@mui/material";
import { NAVIGATION_LINKS } from "./constants";

export const HeaderSkeleton: FC = () => (
  <header>
    <div className="container flex items-center justify-between py-5">
      <Skeleton variant="rounded" width={340} height={66} />
      <div className="flex gap-5">
        {NAVIGATION_LINKS.map(({ id }) => (
          <Skeleton key={id} variant="rounded" width={100} height={45} />
        ))}
      </div>
    </div>
  </header>
);
