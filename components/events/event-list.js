import Eventitems from "./event-items";
import classess from "./event-lists.module.css";
function Eventlist({ items }) {
  const render = items.map((event) => (
    <Eventitems
      key={event.id}
      id={event.id}
      title={event.title}
      location={event.location}
      date={event.date}
      image={event.image}
    />
  ));
  return <ul className={classess.list}>{render}</ul>;
}
export default Eventlist;
