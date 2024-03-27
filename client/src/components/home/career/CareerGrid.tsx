"use client";
import { useState } from "react";
import CareerCard from "./CareerCard";
import CareerDetail from "./CareerDetail";
import YouTubeIFrameApi from "../../ui/YouTubeIFrameApi";
import styles from "./Career.module.scss";
import Scroll from "../../ui/Scroll";

const CAREERS = [
  {
    id: "1",
    service: "클라우드 보안 자동화 시스템 D-CLO",
    company: "(주) 린아레나",
    image:
      "https://img.freepik.com/free-photo/malware-running-code-screen_482257-77708.jpg?t=st=1710257323~exp=1710260923~hmac=5341f52e348cecd726babb070209e4915e7b8ae2381e2d1e113683b2fd7ad27e&w=1380",
    content: {
      mainBusiness: "프론트엔드",
      role: [
        "* 화면 기획 및 설계, 디자인, UI/UX",
        "* 전반적인 화면 및 기능 구현",
        "* react flow 라이브러리를 사용한 시각화 구현",
      ],
      stack: [
        "* Tool - Github, Slack",
        "* Language - JavaScript, TypeScript",
        "* Framework - React.js 17v",
        "* Technology - styled-components, MUI",
      ],
      businessPeriod: "2022.07 ~ 2023.11",
      development: "6명 (frontend: 1 , backend: 1, engine: 4)",
      detail: [
        "* D-CLO v2, D-CLO v3 초기 화면 기획 단계부터 UI/UX, 디자인 및 화면 구현 담당",
        "* 자사(린아레나) 홈페이지 화면 기획 및 설계, 디자인, UI/UX",
        "* 스크롤 애니메이션 및 반응형 적용",
        "* RESTful API 인터페이스를 사용한 문의하기 기능 구현",
      ],
    },
  },
  {
    id: "2",
    service: "OTT 계정 공유 플랫폼 WIZZNEY",
    company: "(주) 유니윌 위즈페이",
    image:
      "https://img.freepik.com/free-photo/man-watching-streaming-service-his-laptop_23-2149047430.jpg?w=1380&t=st=1710342346~exp=1710342946~hmac=c9a8be93e1784b3e78e6739dee711c5362f8681e8f2320e3fb1b6bb6d93ff7c2",
    content: {
      mainBusiness: "프론트엔드",
      role: [
        "* 관리자 페이지, 사용자 페이지 개발 및 유지보수",
        "* Metastream Open Source 커스터마이징",
      ],
      stack: [
        "* Tool - Github, Postman",
        "* Language - JAVA, JavaScript, TypeScript",
        "* Framework -  Spring, React.js 17v, Vue.js",
        "* Technology - HTML5, CSS3, BootStrap",
      ],
      businessPeriod: "2021.07 ~ 2022.04",
      development:
        "9명 (Frontend: 2 , Backend: 3, Design: 1, 기획: 1, Devops: 2)",
      detail: [
        "* Vue.js를 이용한 위즈니 관리자 및 사용자 페이지 개발, 로그인/로그아웃, 회원가입, 상품 등록",
        "* Metastream Open Source를 커스터마이징 하여 자사 스트리밍 서비스 개발",
      ],
    },
  },
  {
    id: "3",
    service: "양돈생산 경영관리 프로그램 PIGPLAN",
    company: "(주) 이지팜",
    image:
      "https://img.freepik.com/free-photo/selective-closeup-shot-pink-pigs-barn_181624-4482.jpg?t=st=1710342404~exp=1710346004~hmac=bd132b69e36d4d1ff929c4679ddd750fa166fd923a5e0f7fe5fb00dbbb1152a0&w=1380",
    content: {
      mainBusiness: "프론트엔드, 백엔드, 유지보수, 고객응대",
      role: [
        "* 생산관리에 관한 보고서 페이지 개발",
        "* 기존 서비스(Legacy)에 대한 운영 및 유지보수",
      ],
      stack: [
        "* Tool - 전자정부프레임워크, GitLab, Crownix Report6.0",
        "* Server - Apache Tomcat v8.0",
        "* Data Base - Oracle",
        "* Language - JAVA",
        "* Framework -  Spring boot",
        "* Technology - CSS3, JavaScript, jQuery, AJAX, JSP, easyUI",
      ],
      businessPeriod: "2019.04 ~ 2020.10",
      development: "9명 (Backend: 8, Design: 1)",
      detail: [
        "* 사용 업체별, 개인 농장별, 품종별, 생산별 보고서 개발",
        "* 농장 데이터 이관 및 관리",
        "* 농장 등록 및 운영 관리",
        "* 고객 응대",
      ],
    },
  },
  {
    id: "4",
    service: "이젠에듀원격평생교육원",
    company: "(주) 이젠에듀커뮤니케이션즈",
    image:
      "https://img.freepik.com/free-vector/flat-international-day-education-illustration_23-2149911213.jpg?t=st=1710342441~exp=1710346041~hmac=d4f3b132c2ecab841723f54abe1ba417b93568fda6d3a75cee4bb36a3a75ee75&w=900",
    content: {
      mainBusiness: "멀티미디어 디자인",
      role: [
        "*  e-Learning 콘텐츠 디자인",
        "* 광고 디자인 (현수막, 배너, 홍보 포스터 디자인)",
        "* 영상 편집",
      ],
      stack: ["* Tool - photoshop, Illustrator, after effects"],
      businessPeriod: "2014.08 ~ 2016.04",
    },
  },
];

export default function CareerGrid() {
  const [selected, setSelected] = useState(CAREERS[0]);

  return (
    <article className={styles.career}>
      <div className={styles.detail_card}>
        <div className={styles.career_detail}>
          <div className={styles.post_list}>
            <h1 className={styles.title}>Career</h1>
            <Scroll>
              {CAREERS.map((career) => (
                <div
                  className={`${styles.card} ${
                    selected.id === career.id && styles.selected
                  }`}
                  key={career.id}
                  onClick={() => {
                    setSelected(career);
                  }}
                >
                  <CareerCard career={career} />
                </div>
              ))}
            </Scroll>
          </div>
          <CareerDetail career={selected} />
        </div>

        <article className={styles.youtube}>
          <YouTubeIFrameApi />
        </article>
      </div>
    </article>
  );
}
