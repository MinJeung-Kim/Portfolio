"use client";
import { useState } from "react";
import Signin from "../../Signin";
import PostModal from "../../ui/PostModal";
import ModalPotal from "../../ui/ModalPotal";
import CheckIcon from "../../ui/icons/CheckIcon";
import AttachmentIcon from "../../ui/icons/AttachmentIcon";
import AirplaneFillIcon from "../../ui/icons/AirplaneFillIcon";
import { useAuth } from "@/context/AuthContext";
import styles from "./Chat.module.scss";

export default function Input() {
  const [input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuth();

  return (
    <div className={styles.input}>
      <input
        type="text"
        value={input}
        onClick={() => user == null && setOpenModal(!openModal)}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        <AirplaneFillIcon />
        <AttachmentIcon />
        <CheckIcon />
      </div>
      {openModal && (
        <ModalPotal>
          <PostModal onClose={() => setOpenModal(false)}>
            <Signin />
          </PostModal>
        </ModalPotal>
      )}
    </div>
  );
}
