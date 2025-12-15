interface StatusCardProps {
    className?: string;
    icon: React.ReactNode;
    count: number;
    title: string;
}

const StatusCard = ({ className, icon, title, count }: StatusCardProps) => {
    return (
        <div className={`border border-black rounded-xl w-full h-full flex flex-col justify-center items-center gap-4 ${className}`}>
            <h1 className="text-3xl">{title}</h1>
            <h2 className="text-gray-400 text-xl">{count}</h2>
            <div className="text-blue-600">
                {icon}
            </div>
        </div>
    );
};

export default StatusCard;