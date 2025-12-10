import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import password, { email } from "@/routes/password";
import { Link, useForm } from "@inertiajs/react";
import Title from "../Components/Title";
import { Button } from "@/components/ui/button";

const Register = ({ }) => {
    const { data, setData, errors, post, processing, reset } = useForm({
        name: '',
        username: '',
        email: '',
        role: 'user',
        password: '',
    });

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
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
                            <FieldLabel htmlFor="">Username</FieldLabel>
                            <Input />
                            <FieldError>{ }</FieldError>
                        </Field>

                        {/* Email */}
                        <Field>
                            <FieldLabel htmlFor="">Email</FieldLabel>
                            <Input />
                            <FieldError>{ }</FieldError>
                        </Field>

                        {/* Role */}
                        <Field className="hidden">
                            <FieldLabel htmlFor="">Role</FieldLabel>
                            <Input />
                            <FieldError>{ }</FieldError>
                        </Field>

                        {/* Password */}
                        <Field>
                            <FieldLabel htmlFor="">Password</FieldLabel>
                            <Input />
                            <FieldError>{ }</FieldError>
                        </Field>

                        {/* Confirm Password */}
                        <Field>
                            <FieldLabel htmlFor="">Confirm Password</FieldLabel>
                            <Input />
                            <FieldError>{ }</FieldError>
                        </Field>

                        <Button type="submit">Register</Button>
                        <p className="text-center text-gray-400 text-sm dark:text-gray-400 m-0 p-0"> Already have an account? <Link className="text-muted-foreground dark:text-gray-300 hover:underline">Login</Link></p>
                        <p className="text-center text-sm text-gray-400"> Go to <Link href="/" className="text-muted-foreground dark:text-gray-300 hover:underline">Home</Link></p>
                    </FieldGroup>
                </FieldSet>
            </form>
        </div>
    )
}

export default Register;