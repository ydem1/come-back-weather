import React, { FC } from "react";
import { Skeleton } from "@mui/material";

export const LogoSkeleton: FC = () => (
  <Skeleton
    className="w-14 xs:w-20 lg:w-80 min-h-14 xs:min-h-16"
    variant="rounded"
  />
);
