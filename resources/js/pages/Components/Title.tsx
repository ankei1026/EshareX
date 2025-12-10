import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
    className?: string;
}

const Title = ({ className, children }: TitleProps) => {
    return (
        <h1 className={`text-2xl lg:text-4xl font-bold ${className}`}>{children}</h1>
    )
}

export default Title;