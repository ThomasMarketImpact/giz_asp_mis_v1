"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../src/supabaseClient';

const ReviewRecords = () => {
    const [records, setRecords] = useState<any[]>([]);

    useEffect(() => {
        const fetchRecords = async () => {
            const { data, error } = await supabase.from('ProjectEntries').select('*');
            if (error) {
                console.error('Error fetching data:', error);
            } else {
                setRecords(data || []);
            }
        };
        fetchRecords();
    }, []);

    return (
        <div>
            <h1>Review Records</h1>
            {records.length > 0 ? (
                <ul>
                    {records.map((record, index) => (
                        <li key={index}>{JSON.stringify(record)}</li>
                    ))}
                </ul>
            ) : (
                <p>No records available.</p>
            )}
        </div>
    );
};

export default ReviewRecords;
