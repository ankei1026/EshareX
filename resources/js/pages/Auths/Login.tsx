import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import Title from "../Components/Title";
import { Link, router, useForm } from "@inertiajs/react";
import password from "@/routes/password";
import { Button } from "@/components/ui/button";

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
    })

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full  lg:w-1/2 flex items-center justify-center" onSubmit={handleLogin}>
                <FieldSet className="w-100">
                    <Title>Login to EshareX</Title>
                    <FieldDescription>Login and share things.</FieldDescription>

                    {/* Userbane */}
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="username">Username</FieldLabel>
                            <Input
                                id="username"
                                type="name"
                                autoComplete="off"
                                placeholder="ankei1026"
                                required
                                onChange={(e) => setData('username', e.target.value)}
                                value={data.username} />
                            <FieldError>{errors.username}</FieldError>
                        </Field>

                        {/* Password */}
                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input
                                id="password"
                                type="password"
                                autoComplete="off"
                                required
                                placeholder="◦◦◦◦◦◦◦◦"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <FieldError>{errors.password}</FieldError>
                        </Field>
                    </FieldGroup>
                    <a href="" className="text-end text-muted-foreground dark:text-gray-300 hover:underline text-sm">Forgot password?</a>
                    <Button
                        className="w-full"
                        type="submit"
                        onClick={handleLogin}
                        disabled={processing}
                    >
                        Login
                    </Button>
                    <p className="text-center text-gray-400 text-sm dark:text-gray-400 m-0 p-0"> Don't have an account? <Link href="/register" className="text-muted-foreground dark:text-gray-300 hover:underline">Register</Link></p>
                    <p className="text-center text-sm text-gray-400"> Go to <Link href="/" className="text-muted-foreground dark:text-gray-300 hover:underline">Home</Link></p>
                </FieldSet>

            </form>
        </div>
    )
}

export default Login;