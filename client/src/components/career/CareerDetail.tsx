import Image from "next/image";
import { Careers, KeyType } from "@/model/career";
import styles from "@/styles/scss/Career.module.scss";

type Props = { career: Careers };

interface Indexable extends KeyType {
  [key: string]: string | string[] | undefined;
}

const COLUMNS = [
  { field: "mainBusiness", header: "주요 업무" },
  { field: "role", header: "담당 역할" },
  { field: "stack", header: "기술 스택" },
  { field: "businessPeriod", header: "업무 기간" },
  { field: "development", header: "개발 인원" },
  { field: "detail", header: "상세 내용" },
];

export default function CareerDetail({
  career: { id, service, company, image, content },
}: Props) {
  return (
    <article className={styles.detail}>
      <Image src={image} alt={service} width={300} height={200} />
      <div className={styles.title_wrap}>
        <p>{company}</p>
        <h1>{service}</h1>
      </div>

      <div className={styles.content}>
        {COLUMNS.map(({ field, header }) => (
          <ul
            key={field}
            className={
              Array.isArray((content as Indexable)[field])
                ? `${styles.array}`
                : `${styles.colum}`
            }
          >
            <li className={styles.header}>- {header} : </li>
            <li>
              {Array.isArray((content as Indexable)[field])
                ? ((content as Indexable)[field] as string[])?.map((item) => (
                    <li key={item} className={styles.item}>
                      {item}
                    </li>
                  ))
                : (content as Indexable)[field]}
            </li>
          </ul>
        ))}
      </div>
    </article>
  );
}
