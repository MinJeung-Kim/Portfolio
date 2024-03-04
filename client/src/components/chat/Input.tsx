"use client";
import CheckIcon from "../icons/CheckIcon";
import AttachmentIcon from "../icons/AttachmentIcon";
import AirplaneFillIcon from "../icons/AirplaneFillIcon";
import styles from "@/styles/scss/ChatInput.module.scss";
import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  return (
    <div className={styles.input}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        <AirplaneFillIcon />
        <AttachmentIcon />
        <CheckIcon />
      </div>
    </div>
  );
}
