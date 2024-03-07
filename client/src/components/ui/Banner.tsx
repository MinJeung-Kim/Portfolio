import React, { memo } from "react";
import styles from "@/styles/scss/Banner.module.scss";

type Props = {
  text: string;
  isAlert: boolean;
};

export const Banner = memo(({ text, isAlert }: Props) => (
  <>{text && <p className={getClassName(isAlert)}>{text}</p>}</>
));

Banner.displayName = "Banner";

function getClassName(isAlert: boolean) {
  return isAlert ? `${styles.banner_red}` : `${styles.banner_green}`;
}
