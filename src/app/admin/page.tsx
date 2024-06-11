"use client";

import WorkStreamForm from '../../../components/WorkStreamForm';
import ProjectForm from '../../../components/ProjectForm';

const AdminPage = () => {
    return (
        <div>
            <h1>Admin Page</h1>
            <h2>Add Work Stream</h2>
            <WorkStreamForm />
            <h2>Add Project</h2>
            <ProjectForm />
        </div>
    );
};

export default AdminPage;
