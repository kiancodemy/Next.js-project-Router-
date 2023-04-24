import Link from "next/link";
import classes from "./main-header.module.css";
function Mainheader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next event</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Brows all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Mainheader;
