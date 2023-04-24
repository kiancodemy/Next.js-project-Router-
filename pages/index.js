import { getFeaturedEvents } from "../dumy";
import Eventlist from "../components/events/event-list";

function homepage() {
  const featureevent = getFeaturedEvents();
  return (
    <div>
      <Eventlist items={featureevent} />
    </div>
  );
}
export default homepage;
