"use client";

import { useEffect, useState } from 'react';
import { supabase } from '../src/supabaseClient';

type ProjectEntry = {
  // Define the properties of your data here
  id: number;
  project_id: number;
  work_stream_id: number;
  date_of_entry: string;
  // Add other fields as per your ProjectEntries table structure
};

const CheckSupabaseConnection = () => {
    const [data, setData] = useState<ProjectEntry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from('ProjectEntries')  // Replace with your actual table name
                .select('*')
                .limit(1);

            if (error) {
                console.error('Error fetching data: ', error);
            } else {
                setData(data || []);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <p>Check the console for data or errors.</p>
            {data.length > 0 ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default CheckSupabaseConnection;
