import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Title from '@/pages/Components/Title';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/toast-1';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    role: string;
}

interface UserEditProps {
    user: User
}
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/admin/users',
    },
    {
        title: `Edit`,
        href: `/admin/users/edit/{id}`,
    },
];

const UserEdit = ({ user }: UserEditProps) => {

    const { showToast } = useToast();

    const { put, data, errors, setData, processing, reset } = useForm({
        'name': user.name,
        'username': user.username,
        'email': user.email,
        'role': user.role,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/user/update/${user.id}`, {
            onSuccess: () => {
                showToast('User updated successfully!', "success", "top-right");
            },
            onError: () => {
                showToast("Error on updating user!", "error", "top-right")
            }
        }
        );
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit User" />
            <Title className='mx-4 pb-4'>Edit {user.name}</Title>

            <div className='bg-white rounded-xl mx-4 p-4 dark:bg-[#171717]'>

                <div className='flex items-center justify-center'>

                    <form onSubmit={handleSubmit} className='p-6 border-2 rounded-xl'>
                        <FieldSet className='w-75 md:w-100'>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor='name'>Name</FieldLabel>
                                    <Input
                                        id='name'
                                        type='text'
                                        placeholder='Jon Doe'
                                        required
                                        onChange={(e) => setData('name', e.target.value)}
                                        value={data.name}
                                    />
                                    <FieldError>{errors.name}</FieldError>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor='username'>Username</FieldLabel>
                                    <Input
                                        id='username'
                                        type='text'
                                        placeholder='jondoe1025'
                                        required
                                        onChange={(e) => setData('username', e.target.value)}
                                        value={data.username}
                                    />
                                    <FieldError>{errors.username}</FieldError>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor='email'>Email</FieldLabel>
                                    <Input
                                        id='email'
                                        type='email'
                                        placeholder='jondoe@email.com'
                                        required
                                        onChange={(e) => setData('email', e.target.value)}
                                        value={data.email}
                                    />
                                    <FieldError>{errors.email}</FieldError>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor='role'>Role</FieldLabel>

                                    <Select onValueChange={(e) => setData('role', e)} value={data.role}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a Role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Roles</SelectLabel>
                                                <SelectItem value="admin">Admin</SelectItem>
                                                <SelectItem value="user">User</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FieldError>{errors.role}</FieldError>
                                </Field>
                                <div className='flex w-full gap-2 items-end justify-end'>
                                    <Button className='bg-violet-100 text-black hover:bg-violet-200 dark:bg-black dark:text-white' type='submit'>Update</Button>
                                    <Button className='border-violet-100 border-2 bg-white text-black hover:bg-violet-200 dark:bg-black dark:text-white' type='button' onClick={() => router.get('/admin/users')}>Cancel</Button>
                                </div>
                            </FieldGroup>
                        </FieldSet>
                    </form>
                </div>
            </div>
        </AppLayout >
    );
}

export default UserEdit;