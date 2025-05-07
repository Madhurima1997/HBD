import { $, component$, PropFunction, useStore } from "@builder.io/qwik";
import './BirthdayFormModal.css'
import { Birthday } from "~/lib/db";

interface BirthdayFormModalProps {
    crazyCat: {value: boolean};
    onSave$: PropFunction<(birtday: Birthday)=>void>;
}

export const BirthdayFormModal = component$(({crazyCat, onSave$}: BirthdayFormModalProps) => {

    const form = useStore<Birthday>({
        name: '',
        dob:'',
        sunsign:''
    });

    const handleSubmit = $(() => {
        if(!form.name || !form.dob)
            return;

        onSave$({...form});
        crazyCat.value=false;
    });

    return (
        <>
        {crazyCat.value && (
            <div class="modal-backdrop">
                <div class="modal-box" onClick$={(e) => e.stopPropagation()}>
                    <p> Inside Modal {crazyCat.value} </p>
                    <form preventdefault:submit onSubmit$={handleSubmit}>
                        <input type="text" name="name" placeholder="Name" value={form.name} onInput$={(e)=>(form.name=(e.target as HTMLInputElement).value)} required/>
                        <input type="date" name="dob" placeholder="Date Of Birth" value={form.dob} onInput$={(e)=>(form.dob=(e.target as HTMLInputElement).value)} required />
                        <button type="submit" onClick$={() => {crazyCat.value=false}}> Save Bday </button>
                    </form>
                </div>
            </div>
        )}
        </>
    );
});