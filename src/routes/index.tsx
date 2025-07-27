import { $, component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BirthdayFormModal } from "~/components/BirthdayFormModal";
import CardWrapper from "~/components/CardWrapper";
import Card from "~/components/CardWrapper";
import { Birthday } from "~/lib/db";

export default component$(() => {

  const showBirthdayModal = useSignal(false);
  const birthdayList = useStore<Birthday[]>([]);

  // // only runs in client side
  // useVisibleTask$(() => {
  //   const stored = localStorage.getItem('birthdays');
  //   if (stored) {
  //     const parsed = JSON.parse(stored) as Birthday[];
  //     birthdayList.splice(0, birthdayList.length, ...parsed);
  //   }
  // });

  const handleSave = $((birthday: Birthday) => {
    birthdayList.push(birthday);
    console.log(birthdayList);
    // localStorage.setItem('birthdays', JSON.stringify(birthdayList));
  });

  // Remove this after adding DB
  const birthdays = [
    {
      name: 'Biswajit Ghosh',
      dob: '2000-02-11'
    },
    {
      name: 'Madhurima Chakraborty',
      dob:  '1997-04-16'
    },
    {
      name: 'Siby Sabu',
      dob: '1991-04-21'
    }
  ]

  return (
    <>
      <div class="header">
        <object class="image-left" data="cake.svg" height="100px" width="100px"></object>
        <h1>Birthday Reminders</h1>
        <object data="cake.svg" height="100px" width="100px"></object>
      </div>
      <div class="add-button">
        <button onClick$={() => showBirthdayModal.value = true}>Add Birthday !
          <div class="star-1">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 784.11 815.53"
              style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
              version="1.1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                  class="fil0">
                </path>
              </g>
            </svg>
          </div>
          <div class="star-2">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
          </div>
          <div class="star-3">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
          </div>
          <div class="star-4">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
          </div>
          <div class="star-5">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
          </div>
          <div class="star-6">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
          </div>
        </button>
      </div>

      <div>
        <ul>
          {birthdayList.map((b, i) => (
            <li key={i}>
              {b.name} - {b.dob}
            </li>
          ))}
        </ul>
      </div>
      <BirthdayFormModal crazyCat={showBirthdayModal} onSave$={handleSave} />
      <CardWrapper birthday={birthdays} />
    </>
  );
});