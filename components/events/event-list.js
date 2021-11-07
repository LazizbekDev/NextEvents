import EventItem from "./event-item";

const EventList = ({list}) => {
    const listStyle = {
        width: '90%',
        maxWidth: '40rem',
        margin: '5rem auto',
    }
    return (
        <ul style={listStyle}>
            {list.map(item => (
                <>
                    <EventItem
                        key={item.id}
                        date={item.date}
                        image={`/${item.image}`}
                        id={item.id}
                        location={item.location}
                        title={item.title} />
                </>
            ))}
        </ul>
    )
}

export default EventList