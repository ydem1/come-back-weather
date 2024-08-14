import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { HeaderSkeleton } from "../Header/HeaderSkeleton";
import { FooterSkeleton } from "../Footer/FooterSkeleton";

interface Props {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
}

export const SkeletonWrapper: FC<Props> = ({
  children,
  className,
  mainClassName,
}) => (
  <div className={cn("flex flex-col h-screen", className)}>
    <HeaderSkeleton />
    <main className={cn("flex-1", mainClassName)}>{children}</main>
    <FooterSkeleton />
  </div>
);
