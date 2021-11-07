import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {Fragment} from "react";
import {useRouter} from "next/router";

const AllEvents = () => {
    const router = useRouter()
    const events = getAllEvents()
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}/`;
        router.push(fullPath).then(r => console.log(r))
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList list={events} />
        </Fragment>
    )
}

export default AllEvents