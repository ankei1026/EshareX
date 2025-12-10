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
import { Switch } from "@headlessui/react";

const Login = () => {
    return (
        <div className="flex items-center justify-center mt-94">
            <FieldSet>
                <FieldLegend>Profile</FieldLegend>
                <FieldDescription>This appears on invoices and emails.</FieldDescription>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="name">Full name</FieldLabel>
                        <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
                        <FieldDescription>This appears on invoices and emails.</FieldDescription>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="username">Username</FieldLabel>
                        <Input id="username" autoComplete="off" aria-invalid />
                        <FieldError>Choose another username.</FieldError>
                    </Field>
                    <Field orientation="horizontal">
                        <Switch id="newsletter" />
                        <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
                    </Field>
                </FieldGroup>
            </FieldSet>
        </div>
    )
}

export default Login;