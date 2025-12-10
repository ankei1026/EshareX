import { ReactNode } from "react";

interface FormFieldProps {
    children: ReactNode,
    classname: string,
}

const FormField = ({ children, classname }: FormFieldProps) => {
    return <div className={`mb-4 ${classname}`}>{children}</div>
}

export default FormField;