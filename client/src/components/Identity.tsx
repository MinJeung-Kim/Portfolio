import Image from "next/image";
import identityImage from "@/assets/images/identity.png";
import styles from "@/styles/scss/Identity.module.scss";

type Props = {
  size: number;
};

export default function Identity({ size }: Props) {
  return (
    <Image
      className={styles.image}
      src={identityImage}
      alt="Picture of the identity"
      width={size}
      height={size}
      priority
    />
  );
}
