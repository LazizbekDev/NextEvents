import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import {Fragment} from "react";

const FilteredEvents = () => {
    const router = useRouter()
    const filterData = router.query.slug
    console.log(filterData)

    if (!filterData) {
        return <div className={'center'}>Loading...</div>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return <p>Invalid filter, Please adjust your values!!!</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No filtered events found for this chosen</p>
    }

    return (
        <Fragment>
            <EventList list={filteredEvents} />
        </Fragment>
    )
}

export default FilteredEvents