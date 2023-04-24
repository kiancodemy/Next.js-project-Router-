import { getAllEvents } from "../../dumy";
import Eventlist from "../../components/events/event-list";
import Eventsearch from "../../components/events/event-search";
import { useRouter } from "next/router";
function allevents() {
  const events = getAllEvents();
  const router = useRouter();
  function findhandler(year, month) {
    const fulpath = `/events/${year}/${month}`;
    router.push(fulpath);
  }
  return (
    <div>
      <Eventsearch onsearch={findhandler}></Eventsearch>
      <Eventlist items={events} />
    </div>
  );
}
export default allevents;
