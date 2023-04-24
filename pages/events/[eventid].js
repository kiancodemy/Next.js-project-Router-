import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dumy";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function eventdetail() {
  const router = useRouter();
  const event = getEventById(router.query.eventid);
  if (!event) {
    return <p>No page has found!!!</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export default eventdetail;
