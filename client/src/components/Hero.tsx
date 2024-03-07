import ArrowFillIcon from "./ui/icons/ArrowFillIcon";
import styles from "@/styles/scss/Hero.module.scss";

export default function Hero() {
  return (
    <article className={styles.hero}>
      <div className={styles.banner}>
        <p>MORE INFO</p>
        <div>
          <h2>록시에 대해 더 알아보기</h2>
          <ArrowFillIcon />
        </div>
      </div>

      <div className={styles.content}>
        <h1>저에 대해 궁금한 가요?</h1>
        <p>
          저에 대해 궁금한 점을 물어봐주세요👋 <br />
          즐겁게 몰입하고 크게 성장하며, 사용자의 가치를 <br /> 중요하게
          생각하는 프론트엔드 개발자 입니다.
        </p>
      </div>
    </article>
  );
}
