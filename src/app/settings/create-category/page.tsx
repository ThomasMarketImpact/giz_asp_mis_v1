"use client";

import { useState } from 'react';
import { supabase } from '../../../supabaseClient';

const CreateCategoryPage = () => {
    const [name, setName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { data, error } = await supabase.from('WorkStreams').insert([{ name }]);

        if (error) {
            console.error('Error creating category:', error);
        } else {
            console.log('Category created successfully:', data);
        }
    };

    return (
        <div>
            <h1>Create New Category</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Category Name:</label>
                    <input type="text" name="name" value={name} onChange={handleChange} required />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateCategoryPage;
