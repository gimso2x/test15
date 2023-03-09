import { useRouter } from "next/router";
import Header from "../Header";
import SubHeader from "../Header/subHeader";
import Footer from "../Footer";

import type { ReactNode } from "react";

import styles from "./Layout.module.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div id={styles.container}>
      {router.pathname === "/" ? <Header /> : <SubHeader />}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
