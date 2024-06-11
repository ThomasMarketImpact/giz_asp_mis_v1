"use client";

import { useState } from 'react';
import { supabase } from '../src/supabaseClient';

const WorkStreamForm = () => {
    const [name, setName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { data, error } = await supabase.from('WorkStreams').insert([{ name }]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Work Stream Name:</label>
                <input type="text" name="name" value={name} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default WorkStreamForm;
