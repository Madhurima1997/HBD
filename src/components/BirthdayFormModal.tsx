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
        dob:''
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
                    <form preventdefault:submit onSubmit$={handleSubmit}>
                        <p class="form-items-title">Add Birthday</p>
                        <div class="form-items">
                            <label>Name :</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                value={form.name} 
                                onInput$={(e)=>(form.name=(e.target as HTMLInputElement).value)} 
                                required
                            />
                        </div>
                        <div class="form-items">
                        <label>Date of Birth :</label>
                            <input 
                                type="date" 
                                name="dob" 
                                placeholder="Date Of Birth" 
                                value={form.dob} 
                                onInput$={(e)=>(form.dob=(e.target as HTMLInputElement).value)}
                                required 
                            />
                        </div>
                        <div class="form-items">
                            <div class="actions">
                                <button type="submit" onClick$={() => {crazyCat.value=false}}> Save Bday </button>
                            </div>
                            <div class="actions">
                                <button type="button" onClick$={() => {crazyCat.value=false}}>Cancel</button>
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
        )}
        </>
    );
});