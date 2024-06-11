"use client";

import WorkStreamForm from '../../../components/WorkStreamForm';
import ProjectForm from '../../../components/ProjectForm';
import ProjectEntryForm from '../../../components/ProjectEntryForm';

const ManagePage = () => {
    return (
        <div>
            <h1>Manage Data</h1>
            <h2>Add Work Stream</h2>
            <WorkStreamForm />
            <h2>Add Project</h2>
            <ProjectForm />
            <h2>Add Project Entry</h2>
            <ProjectEntryForm />
        </div>
    );
};

export default ManagePage;
