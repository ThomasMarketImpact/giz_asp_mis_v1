"use client";

import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the GIZ ASP MIS v1</h1>
            <nav>
                <ul>
                    <li><Link href="/settings">Settings</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                    <li><Link href="/input">Input Record</Link></li>
                    <li><Link href="/review">Review Records</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
