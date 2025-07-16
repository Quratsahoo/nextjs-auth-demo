'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            router.replace('/login'); // Redirect to login if not authenticated
        }
    }, [router]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Welcome to your Dashboard</h1>
            <p className="text-gray-700">You are successfully logged in.</p>
            <button
                onClick={() => {
                    localStorage.removeItem('user');
                    router.push('/login');
                }}
                className="mt-6 rounded bg-red-600 px-4 py-2  hover:bg-red-700"
            >
                Logout
            </button>

        </main>
    );
}
