import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
  children: ReactNode;
  className?: string;
  mainClassName?: string;
}

export const PageWrapper: FC<Props> = ({
  children,
  className,
  mainClassName,
}) => (
  <div className={cn("flex flex-col h-screen", className)}>
    <Header />
    <main className={cn("flex-1", mainClassName)}>{children}</main>
    <Footer />
  </div>
);
