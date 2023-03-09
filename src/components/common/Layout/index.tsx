import { useRouter } from "next/router";
import Header from "../Header";
import SubHeader from "../Header/subHeader";
import Footer from "../Footer";

import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <div id="container">
      {router.pathname === "/" ? <Header /> : <SubHeader />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
