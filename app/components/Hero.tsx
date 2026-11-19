import Title from "./ui/Title";

export default function Hero() {
    return(
        <section className="flex flex-col items-center py-5">
            <div className="flex gap-5 flex-col w-[90dvw] bg-white shadow-lg p-5 rounded-xl">
                <Title>Discover Indonesia’s Best Single-Origin Coffees</Title>
                <p className="text-center text-lg text-shadow-sm">A curated showcase of Indonesia's finest beans, highlighting unique origins and flavor notes.</p>
            </div>
        </section>
    );
};