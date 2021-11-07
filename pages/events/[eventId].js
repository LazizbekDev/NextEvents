import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import {Fragment} from "react";
import EventSummary from "../../components/event-details/event-summary";
import EventLogistics from "../../components/event-details/event-logistics";
import EventContent from "../../components/event-details/event-content";

const EventDetails = () => {
    const router = useRouter()
    const eventId = router.query.eventId
    const event=getEventById(eventId)
    if (!event) return <div>Page not fount</div>
    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                image={event.image}
                imageAlt={event.title}
                address={event.location}
                date={event.date}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventDetails