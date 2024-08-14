import React from "react";
import { Skeleton, Stack } from "@mui/material";
import { SkeletonWrapper } from "src/components/LayoutsSkeleton/SkeletonWrapper";

export const CityItemSkeleton = () => (
  <SkeletonWrapper>
    <section className="container">
      <Stack spacing={1}>
        <Skeleton variant="rounded" width={180} height={96} />

        <div className="flex flex-col gap-5">
          <div>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>

          <div>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>
        </div>
      </Stack>
    </section>
  </SkeletonWrapper>
);
