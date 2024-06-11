"use client";

import Link from 'next/link';

const SettingsPage = () => {
    return (
        <div>
            <h1>Settings</h1>
            <nav>
                <ul>
                    <li><Link href="/settings/create-category">Create New Category</Link></li>
                    <li><Link href="/settings/categories">See Current Categories</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default SettingsPage;
