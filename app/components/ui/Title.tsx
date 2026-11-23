interface TypeTitle {
    className?: string,
    children: React.ReactNode;
}

export default function Title({ className, children }: TypeTitle){
    return(
        <h1 className={`text-3xl text-center text-(--titles) text-shadow-sm ${className}`}><strong>{children}</strong></h1>
    );
};