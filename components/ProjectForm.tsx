"use client";

import { useState } from 'react';
import { supabase } from '../src/supabaseClient';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { name, description } = formData;

        const { data, error } = await supabase.from('Projects').insert([{ name, description, created_on: new Date() }]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Project Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Project Description:</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProjectForm;
