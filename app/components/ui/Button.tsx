interface TypeButton {
    children: React.ReactNode;
    className?: string
}

export default function Button({ children, className }: TypeButton) {
    return(
        <button className={`w-35 text-center text-white h-fit bg-(--bg-button) text-shadow-sm p-3 rounded-lg shadow-lg hover:bg-(--button-hover) hover:cursor-pointer ${className}`}>
            {children}
        </button>
    );
};