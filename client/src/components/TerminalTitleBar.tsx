type TerminalTitleBarProps = {
    title: string;
    titleClassName?: string;
};

export default function TerminalTitleBar({ title, titleClassName = "" }: TerminalTitleBarProps) {
    return (
        <div className="flex items-center gap-3 border-b border-edge px-3 py-2">
            <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-edge" />
                <span className="h-2.5 w-2.5 rounded-full bg-edge" />
                <span className="h-2.5 w-2.5 rounded-full bg-edge" />
            </span>
            <span className={`truncate text-muted ${titleClassName}`}>
                {title}
            </span>
        </div>
    );
}
