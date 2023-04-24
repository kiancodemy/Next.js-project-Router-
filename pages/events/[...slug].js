import { useRouter } from "next/router";
import Eventlist from "../../components/events/event-list";
import { getFilteredEvents } from "../../dumy";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
function filterevent() {
  const router = useRouter();
  const filter = router.query.slug;
  if (!filter) {
    return (
      <ErrorAlert>
        <p className="centr">Loading...</p>
      </ErrorAlert>
    );
  }

  const filteryear = filter[0];
  const filtermonth = filter[1];

  const numyear = +filteryear;
  const nummonth = +filtermonth;

  const f = getFilteredEvents({ year: numyear, month: nummonth });
  const date = new Date(filteryear, filtermonth - 1);

  if (
    isNaN(numyear) ||
    isNaN(nummonth) ||
    numyear > 2030 ||
    numyear < 2019 ||
    nummonth < 1 ||
    nummonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>invalid filter please adjust</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show sll Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!f || f.length === 0) {
    return <ErrorAlert>no events for chosen filter</ErrorAlert>;
  }

  return (
    <Fragment>
      <ResultsTitle date={date}></ResultsTitle>
      <Eventlist items={f} />
    </Fragment>
  );
}
export default filterevent;
