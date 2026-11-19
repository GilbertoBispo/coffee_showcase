import Button from "./Button";

export default function Card() {
    
    const typesOfCoffee  = [
        {
            id: 0,
            title: "Lampung Robusta",
            description: "Harvested from the fertile lowlands of Southern Sumatra, this bold, high-caffeine Robusta stands out with a rich crema, intense dark cocoa notes, toasted hazelnuts, and a punchy, smoky finish.",
            image: "/lampung_coffee.jpeg",
            alt: "Lampung Coffee"
        },
        {
            id: 1,
            title: "Java Preanger",
            description: "Cultivated on the misty mountain slopes of West Java, this heritage Arabica offers a clean, balanced profile featuring subtle hints of brown sugar, roasted nuts, and a delicate floral aroma.",
            image: "/java_coffee.jpeg",
            alt: "Java Preanger"
        },
        {
            id: 2,
            title: "Toraja Sapan",
            description: "Harvested at high altitudes in the remote mountains of Sulawesi, Toraja Sapan captivates with rich notes of ripe dark berries, warm caramel, and a smooth, lingering cocoa aftertaste.",
            image: "/toraja_coffee.jpg",
            alt: "Toraja Sapan"
        },
        {
            id: 3,
            title: "Bali Kintamani",
            description: "Nurtured in fertile volcanic soil alongside citrus orchards, this vibrant single-origin stands out with bright notes of sweet orange zest, caramelized cane sugar, and a crisp, refreshing finish.",
            image: "/bali_kintamani_coffee.jpeg",
            alt: "Bali Kntamani"
        }
    ];
    
    return(
        <div className="flex flex-col gap-5 items-center">
            {typesOfCoffee.map((coffee, index) => {
                const title = coffee.title;
                const description = coffee.description;
                const image = coffee.image;
                const alt = coffee.alt;
                
                return(
                    <div key={index} className="flex flex-col bg-(--bg-card)/70 backdrop-blur-sm border-(--dividers)/10 border w-[90dvw] h-100 rounded-xl shadow-xl">
                        
                        <img src={`${image}`} alt={`${alt}`} className="w-full h-[30%] object-cover rounded-t-xl object-center"/>
                        
                        <div className="w-full p-5 flex flex-col gap-5">
                            <h2 className="text-xl text-(--titles) font-bold text-shadow-sm">{title}</h2>
                            <p className="text-shadow-sm text-black/80">{description}</p>
                            <Button>Explore Origin</Button>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};