import Title from "./ui/Title";

export default function Footer() {
    return(
        <footer className="flex flex-col items-center p-5">
            <div className="flex flex-col gap-5 text-center">
                <div className="text-center flex flex-col gap-5">
                    <Title>Coffee Showcase</Title>
                    <p>Exploring the best Indonesian coffees</p>
                </div>

                <p>Curated single-origin coffees from Indonesia’s volcanic highlands and fertile valleys, crafted for roasters and buyers seeking traceable quality.</p>
                <p><em>© 2026 Coffee Showcase — Indonesian Origins</em></p>
                
            </div>
        </footer>
    );
};