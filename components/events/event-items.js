import Link from "next/link";
import classes from "./event-items.module.css";
import Button from "../ui/button";
import Dateicon from "../icons/date-icon";
import Address from "../icons/address-icon";
import Arrowright from "../icons/arrow-right-icon";

function Eventitems({ id, title, location, date, image }) {
  const datee = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const link = `/events/${id}`;
  const adress = location.replace(",", "\n");
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <Dateicon></Dateicon>
          <time>{datee}</time>
        </div>
        <div className={classes.address}>
          <Address></Address>
          <address>{adress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={link}>
            <span> Explore event</span>
            <span className={classes.icon}>
              <Arrowright />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default Eventitems;
