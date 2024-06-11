"use client";

import { useState } from 'react';
import { supabase } from '../src/supabaseClient';

const ProjectEntryForm = () => {
    const [formData, setFormData] = useState({
        project_id: '',
        work_stream_id: '',
        date_of_entry: '',
        author: '',
        publication_year: '',
        title: '',
        journal: '',
        page_numbers: '',
        source: '',
        summary: '',
        abstract: '',
        full_text: '',
        document_type: '',
        tags: '',
        vector_embeddings: '',
        metadata: '',
        created_by: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const {
            project_id,
            work_stream_id,
            date_of_entry,
            author,
            publication_year,
            title,
            journal,
            page_numbers,
            source,
            summary,
            abstract,
            full_text,
            document_type,
            tags,
            vector_embeddings,
            metadata,
            created_by,
        } = formData;

        const { data, error } = await supabase.from('ProjectEntries').insert([
            {
                project_id: parseInt(project_id),
                work_stream_id: parseInt(work_stream_id),
                date_of_entry,
                author,
                publication_year: parseInt(publication_year),
                title,
                journal,
                page_numbers,
                source,
                summary,
                abstract,
                full_text,
                document_type,
                tags: tags.split(',').map(tag => tag.trim()),
                vector_embeddings: vector_embeddings.split(',').map(Number),
                metadata: JSON.parse(metadata),
                created_by,
            },
        ]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Project ID:</label>
                <input type="number" name="project_id" value={formData.project_id} onChange={handleChange} required />
            </div>
            <div>
                <label>Work Stream ID:</label>
                <input type="number" name="work_stream_id" value={formData.work_stream_id} onChange={handleChange} required />
            </div>
            <div>
                <label>Date of Entry:</label>
                <input type="date" name="date_of_entry" value={formData.date_of_entry} onChange={handleChange} required />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" name="author" value={formData.author} onChange={handleChange} required />
            </div>
            <div>
                <label>Publication Year:</label>
                <input type="number" name="publication_year" value={formData.publication_year} onChange={handleChange} required />
            </div>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div>
                <label>Journal:</label>
                <input type="text" name="journal" value={formData.journal} onChange={handleChange} required />
            </div>
            <div>
                <label>Page Numbers:</label>
                <input type="text" name="page_numbers" value={formData.page_numbers} onChange={handleChange} required />
            </div>
            <div>
                <label>Source:</label>
                <input type="text" name="source" value={formData.source} onChange={handleChange} required />
            </div>
            <div>
                <label>Summary:</label>
                <textarea name="summary" value={formData.summary} onChange={handleChange} required />
            </div>
            <div>
                <label>Abstract:</label>
                <textarea name="abstract" value={formData.abstract} onChange={handleChange} required />
            </div>
            <div>
                <label>Full Text:</label>
                <textarea name="full_text" value={formData.full_text} onChange={handleChange} required />
            </div>
            <div>
                <label>Document Type:</label>
                <input type="text" name="document_type" value={formData.document_type} onChange={handleChange} required />
            </div>
            <div>
                <label>Tags (comma-separated):</label>
                <input type="text" name="tags" value={formData.tags} onChange={handleChange} required />
            </div>
            <div>
                <label>Vector Embeddings (comma-separated numbers):</label>
                <input type="text" name="vector_embeddings" value={formData.vector_embeddings} onChange={handleChange} required />
            </div>
            <div>
                <label>Metadata (JSON format):</label>
                <textarea name="metadata" value={formData.metadata} onChange={handleChange} required />
            </div>
            <div>
                <label>Created By:</label>
                <input type="text" name="created_by" value={formData.created_by} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProjectEntryForm;
