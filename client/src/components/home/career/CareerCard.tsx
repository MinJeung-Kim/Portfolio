import { Careers } from "@/model/career";
import LineArrowFillIcon from "../../ui/icons/LineArrowFillIcon";
import styles from "./Career.module.scss";

type Props = { career: Careers };

export default function CareerCard({ career: { service, company } }: Props) {
  return (
    <ul className={styles.career_card}>
      <li className={styles.service}>
        <p>{service}</p>
        <LineArrowFillIcon />
      </li>
      <li className={styles.company}>{company}</li>
    </ul>
  );
}
