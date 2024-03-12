import { Careers } from "@/model/career";
import ArrowFillIcon from "../ui/icons/ArrowFillIcon";
import styles from "@/styles/scss/Career.module.scss";

type Props = { career: Careers };

export default function CareerCard({
  career: { id, service, company },
}: Props) {
  return (
    <ul className={styles.career_card}>
      <li className={styles.service}>
        <div>{service}</div>
        <ArrowFillIcon />
      </li>
      <li className={styles.company}>{company}</li>
    </ul>
  );
}
