"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../../../supabaseClient';

const CategoriesPage = () => {
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const { data, error } = await supabase.from('WorkStreams').select('*');
            if (error) {
                console.error('Error fetching categories:', error);
            } else {
                setCategories(data || []);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Current Categories</h1>
            {categories.length > 0 ? (
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No categories available.</p>
            )}
        </div>
    );
};

export default CategoriesPage;
