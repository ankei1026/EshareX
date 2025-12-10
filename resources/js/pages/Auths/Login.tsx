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
import { useForm } from "@inertiajs/react";
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
                    <FieldDescription>This appears on invoices and emails.</FieldDescription>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="username">Full name</FieldLabel>
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
                        <Field>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <Input
                                id="password"
                                type="password"
                                autoComplete="off"
                                required
                                onChange={(e) => setData('password', e.target.value)}
                                aria-invalid />
                            <FieldError>{errors.password}</FieldError>
                        </Field>
                    </FieldGroup>
                    <Button
                        className="w-full"
                        type="submit"
                        onClick={handleLogin}
                        disabled={processing}
                    >
                        Login
                    </Button>
                </FieldSet>

            </form>
            <div className="w-1/2 h-full hidden lg:block dark:bg-white bg-black">
                <h1 className="text-black">Hello</h1>
            </div>
        </div>
    )
}

export default Login;