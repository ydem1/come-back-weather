import React, { FC } from "react";
import { Skeleton } from "@mui/material";
import { SOCIAL_MEDIA_LINKS } from "./constants";

export const FooterSkeleton: FC = () => (
  <footer>
    <div className="container flex items-center justify-between py-5">
      <Skeleton variant="rounded" width={340} height={66} />
      <div className="flex gap-5">
        {SOCIAL_MEDIA_LINKS.map(({ id }) => (
          <Skeleton key={id} variant="circular" width={24} height={24} />
        ))}
      </div>
    </div>
  </footer>
);
