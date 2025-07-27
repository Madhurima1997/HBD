import { Birthday } from "~/lib/db";
import Card from "./Card";
import '../styles/cards.css'

type Props = {
    birthday: Birthday[];
};
export default function CardWrapper({birthday}: Props) {
    return (
        <div class="card-wrapper">
            {birthday.map((bday) => (
                <Card name={bday.name} dob={bday.dob} />
            ))}
        </div>
    )
}