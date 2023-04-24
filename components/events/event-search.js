import eventdetail from "../../pages/events/[eventid]";
import Button from "../ui/button";
import { useRef } from "react";
import classes from "./event-search.module.css";
function Eventsearch({ onsearch }) {
  const yearref = useRef();
  const monthref = useRef();
  function submithandler(e) {
    e.preventDefault();
    const selectyear = yearref.current.value;
    const selectmonth = monthref.current.value;
    onsearch(selectyear, selectmonth);
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearref}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Months</label>
          <select id="month" ref={monthref}>
            <option value="1">January </option>
            <option value="2">February </option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">Auguest</option>
            <option value="9">Sepyember</option>
            <option value="10">october</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
}
export default Eventsearch;
