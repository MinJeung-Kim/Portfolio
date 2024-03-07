"use client";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Banner } from "./ui/Banner";
import NaverIcon from "./ui/icons/NaverIcon";
import GoogleIcon from "./ui/icons/GoogleIcon";
import FacebookIcon from "./ui/icons/FacebookIcon";
import KakaoTalkIcon from "./ui/icons/KakaoTalkIcon";
import { useAuth } from "@/context/AuthContext";
import styles from "@/styles/scss/Signin.module.scss";

const SOCIALS = [
  { title: "Naver", icon: <NaverIcon /> },
  { title: "Kakao", icon: <KakaoTalkIcon /> },
  { title: "Google", icon: <GoogleIcon /> },
  { title: "Facebook", icon: <FacebookIcon /> },
];

export default function Signin() {
  // true = signin
  const [signup, setSignup] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    url: "",
  });
  const [text, setText] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const { signUp, logIn } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (signup) {
      signUp(
        inputs.username,
        inputs.password,
        inputs.name,
        inputs.email,
        inputs.url
      ).catch(setError);
    } else {
      logIn(inputs.username, inputs.password).catch(setError);
    }
  };
  const setError = (error: any) => {
    setText(error.toString());
    setIsAlert(true);
  };

  return (
    <section className={styles.signin}>
      <h1>{signup ? "Sign Up" : "Sign In"}</h1>
      <p>
        {signup ? "Already have an account?" : " Don’t have an account?"}
        <Link href={"/"} onClick={() => setSignup(!signup)}>
          {signup ? "Sign In" : "Sign Up"}
        </Link>
      </p>
      <Banner text={text} isAlert={isAlert} />
      <form className={styles.auth_form} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="id"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        {signup && (
          <>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </>
        )}

        <button type="submit">Continue</button>
      </form>

      {!signup && (
        <div className={styles.social}>
          <p>Or continue with</p>
          <ul className={styles.social_item}>
            {SOCIALS.map(({ title, icon }) => (
              <li key={title} className={getClassName(title)}>
                {icon}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function getClassName(title: string) {
  switch (title) {
    case "Google":
      return `${styles.social_google}`;
    case "Facebook":
      return `${styles.social_facebook}`;
    case "Naver":
      return `${styles.social_naver}`;
    case "Kakao":
      return `${styles.social_kakao}`;
    default:
      throw new Error(`Unsupported file type (${title})`);
  }
}
