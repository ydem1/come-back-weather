import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Header } from "../Header";
// import { Footer } from "../Footer";

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
  <div className={cn("flex flex-col", className)}>
    <Header />
    <main className={mainClassName}>{children}</main>
    {/* <Footer isShown={isShownFooter} /> */}
  </div>
);
