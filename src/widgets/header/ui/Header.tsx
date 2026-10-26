import styles from "./Header.module.css";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>SkiMotion</h1>
      <Image src="plus.svg" alt="Добавить" width={40} height={40} />
    </header>
  );
}
