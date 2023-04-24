import { Fragment } from "react";
import Mainheader from "./main-header";
function Layout({ children }) {
  return (
    <Fragment>
      <Mainheader></Mainheader>
      <main>{children}</main>
    </Fragment>
  );
}
export default Layout;
