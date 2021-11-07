import cs from './event-item.module.css'
import {Button} from "../ui/button";
const EventItem = ({title, image, date, location, id}) => {
    const humanReadableDate = new Date(date).toLocaleDateString('uz', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formattedLocation = location.replace(', ', '\n')

    return (
        <li className={cs.item}>
            <img src={image} alt={title} style={{width: 200}}/>
            <div className={cs.content}>
                <div>
                    <h2>{title}</h2>
                    <div className={cs.date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={cs.address}>
                        <address>{formattedLocation}</address>
                    </div>
                </div>
                <div className={cs.actions}>
                    <Button link={`/events/${id}`}>Read more</Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem