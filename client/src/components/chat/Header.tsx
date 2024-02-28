import Identity from "../Identity";
import InfoFillIcon from "../icons/InfoFillIcon";
import PhoneFillIcon from "../icons/PhoneFillIcon";
import VideocamFillIcon from "../icons/VideocamFillIcon";

import styles from "@/styles/scss/Chat.module.scss";

export default function Header() {
  return (
    <article className={styles.header}>
      <div className={styles.identity}>
        <Identity size={40} />
        <div className={styles.nickname}>
          <p>Roxie</p>
          <p>#ADMIN</p>
        </div>
      </div>
      <div className={styles.contact}>
        <PhoneFillIcon />
        <VideocamFillIcon />
        <InfoFillIcon />
      </div>
    </article>
  );
}
