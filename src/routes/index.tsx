import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {BirthdayFormModal} from "~/components/BirthdayFormModal";
import { Birthday } from "~/lib/db";

export default component$(() => {

  const showBirthdayModal = useSignal(false);
  const birthdayList = useStore<Birthday[]>([]);

  const handleSave = $((birthday:Birthday)=> {
    console.log('BDAY',birthday);
    birthdayList.push(birthday);
  });
  console.log(showBirthdayModal.value);
  return (
    <>
      <h1>Birthday Reminder</h1>
      <button onClick$={() => showBirthdayModal.value=true}>+ Add Reminder</button>
      <ul>
        {birthdayList.map((b,i)=> (
          <li key={i}>
            {b.name} - {b.dob}
          </li>
        ))}
      </ul>
      <BirthdayFormModal crazyCat={showBirthdayModal} onSave$={handleSave}/>
    </>
  );
});