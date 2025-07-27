import { Birthday } from "~/lib/db";
import '../styles/cards.css'

export default function Card({name, dob }: Birthday) {
    const formattedDate = new Date(dob).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long'
    });
    return (
        <div class="cute-card">
            <h3 class="cute-card-heading"><span class="birthday-emoji">&#127874;</span>    Birthday</h3>
            <div class="card-body">
                <h2 class="card-name">{name}</h2>
                <p class="card-dob"><span class="birthday-emoji">&#128197;</span>    {formattedDate}</p>
            </div>
        </div>
    )
}