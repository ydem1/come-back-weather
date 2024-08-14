import React, { FC } from "react";
import { Skeleton } from "@mui/material";
import { NAVIGATION_LINKS } from "./constants";
import { LogoSkeleton } from "../Logo/LogoSkeleton";

export const HeaderSkeleton: FC = () => (
  <header>
    <div className="container flex items-center justify-between py-5">
      <LogoSkeleton />

      <div className="flex gap-5">
        {NAVIGATION_LINKS.map(({ id }) => (
          <Skeleton
            key={id}
            className="w-20 lg:w-25 min-h-9 lg:min-h-11"
            variant="rounded"
          />
        ))}
      </div>
    </div>
  </header>
);
