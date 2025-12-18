import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, router, useForm } from "@inertiajs/react";
import Title from "../Components/Title";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/toast-1";

const Register = ({ }) => {

    const { showToast } = useToast();

    const { data, setData, errors, post, processing, reset } = useForm({
        name: '',
        username: '',
        email: '',
        bio: '',
        role: 'admin',
        password: '',
        password_confirmation: '',
    });

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register', {
            onSuccess: () => {
                showToast("Account created successfully!", "success", "top-right")
            },
            onError: () => { showToast("Failed to create account!", "error", "top-right") }
        });
    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <form onSubmit={handleRegister} className="w-1/2 flex justify-center items-center">
                <FieldSet className="w-1/2">
                    <FieldGroup>
                        <Title>Register to EshareX</Title>
                        <FieldDescription>Register and share something meaningful.</FieldDescription>

                        {/* Name */}
                        <Field>
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input
                                id="name"
                                required
                                placeholder="Jon Doe"
                                type="text"
                                autoComplete="off"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <FieldError>{errors.name}</FieldError>
                        </Field>

                        {/* Username */}
                        <Field>
                            <FieldLabel htmlFor="username">Username</FieldLabel>
                            <Input
                                id="username"
                                required
                                placeholder="jondoe1026"
                                type="text"
                                autoComplete="off"
                                value={data.username}
                                onChange={(e) => setData('username', e.target.value)}
                            />
                            <FieldError>{errors.username}</FieldError>
                        </Field>

                        {/* Email */}
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                placeholder="jondoe@example.com"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <FieldError>{errors.email}</FieldError>
                        </Field>

                        {/* Bio */}
                        <Field>
                            <FieldLabel htmlFor="bio">Bio</FieldLabel>
                            <Input
                                id="bio"
                                type="bio"
                                placeholder="Life is a fiction."
                                value={data.bio}
                                onChange={(e) => setData('bio', e.target.value)}
                            />
                            <FieldError>{errors.bio}</FieldError>
                        </Field>

                        {/* Role */}
                        <Field className="hidden">
                            <FieldLabel htmlFor="role">Role</FieldLabel>
                            <Input
                                id="role"
                                required
                                value={data.role}
                            />
                            <FieldError>{errors.role}</FieldError>
                        </Field>

                        {/* Password */}
                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={data.password}
                                placeholder="◦◦◦◦◦◦◦◦"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <FieldError>{errors.password}</FieldError>
                        </Field>

                        {/* Confirm Password */}
                        <Field>
                            <FieldLabel htmlFor="confirm_password">Confirm Password</FieldLabel>
                            <Input
                                id="confirm_password"
                                type="password"
                                required
                                value={data.password_confirmation}
                                placeholder="◦◦◦◦◦◦◦◦"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            <FieldError>{errors.password_confirmation}</FieldError>
                        </Field>

                        <Button type="submit" disabled={processing}>Register</Button>
                        <p className="text-center text-gray-400 text-sm dark:text-gray-400 m-0 p-0"> Already have an account? <Link href="/login" className="text-muted-foreground dark:text-gray-300 hover:underline"> Login</Link></p>
                        <p className="text-center text-sm text-gray-400"> Go to <Link href="/" className="text-muted-foreground dark:text-gray-300 hover:underline">Home</Link></p>
                    </FieldGroup>
                </FieldSet>
            </form>
        </div>
    )
}

export default Register;