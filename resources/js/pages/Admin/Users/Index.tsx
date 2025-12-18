import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { DataTable } from '@/pages/Components/DataTable';
import { type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { userColumns, User } from './columns';
import { useToast } from '@/components/toast-1';
import React, { useState } from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/admin/users',
    },
];


interface UserPageProps {
    users: User[];
}

const UsersPage = ({ users }: UserPageProps) => {

    const { showToast } = useToast();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleEdit = (id: string): void => {
        router.get(`/admin/user/edit/${id}`)
    }

    const handleDelete = (id: string): void => {
        router.delete(`/admin/user/delete/${id}`, {
            onSuccess: () => {
                showToast("User deleted successfully", "success", "top-right");
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className='bg-white rounded-xl mx-4 p-4 dark:bg-[#171717]'>
                <DataTable title='Users' description='View all users' columns={userColumns(handleEdit, handleDelete, setIsOpen)} data={users} buttonName='Create Users' href='/admin/users/create' />
            </div>
        </AppLayout>
    );
}

export default UsersPage;