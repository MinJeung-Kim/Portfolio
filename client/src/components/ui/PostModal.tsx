import CloseIcon from "./icons/CloseIcon";
import styles from "@/styles/scss/PostModal.module.scss";

type Props = { children: React.ReactNode; onClose: () => void };

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className={styles.modal}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button className={styles.close} onClick={() => onClose()}>
        <CloseIcon />
      </button>
      <div className={styles.children}> {children}</div>
    </section>
  );
}
