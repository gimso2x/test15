import Link from "next/link";
import styles from "./Header.module.scss";

const SubHeader = () => {
  return (
    <header className={styles.subHeader}>
      <Link href="/">백버튼</Link>
      분석 내용
    </header>
  );
};

export default SubHeader;
