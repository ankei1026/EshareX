import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Title from '@/pages/Components/Title';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/toast-1';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: '/admin/users',
    },
    {
        title: 'Create',
        href: '/admin/users/create',
    },
];


const UserCreate = ({ }) => {

    const { showToast } = useToast();

    const { post, data, errors, setData, processing, reset } = useForm({
        'name': '',
        'username': '',
        'email': '',
        'role': '',
        'password': '',
        'password_confirmation': '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/users/create', {
            onSuccess: () => {
                showToast('User created successfully!', "success", "top-right");
            },
            onError: () => {
                showToast("Error on creating user!", "error", "top-right")
            }
        }
        );
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <Title className='mx-4 pb-4'>Create User</Title>

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
                                        autoComplete='off'
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
                                        autoComplete='off'
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

                                <Field>
                                    <FieldLabel htmlFor='password'>Password</FieldLabel>
                                    <Input
                                        id='password'
                                        type='password'
                                        placeholder="◦◦◦◦◦◦◦◦"

                                        required
                                        onChange={(e) => setData('password', e.target.value)}
                                        value={data.password}
                                    />
                                    <FieldError>{errors.password}</FieldError>
                                </Field>

                                <Field>
                                    <FieldLabel htmlFor='password_confirmation'>Confirm Password</FieldLabel>
                                    <Input
                                        id='password_confirmation'
                                        type='password'
                                        placeholder="◦◦◦◦◦◦◦◦"
                                        required
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        value={data.password_confirmation}
                                    />
                                    <FieldError>{errors.password_confirmation}</FieldError>
                                </Field>

                                <Button className='bg-violet-100 text-black hover:bg-violet-200 dark:bg-black dark:text-white' type='submit' onSubmit={handleSubmit}>Create</Button>
                            </FieldGroup>

                        </FieldSet>
                    </form>
                    {/* <button onClick={() => showToast('Here is some info.', 'info', 'top-right')}>Click</button> */}
                </div>
            </div>
        </AppLayout >
    );
}

export default UserCreate;