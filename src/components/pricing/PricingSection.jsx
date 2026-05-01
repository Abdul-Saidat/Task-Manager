import PricingCard from "./PricingCard";

function PricingSection() {
    const card = [
        {
            tier: "Free",
            price: "$0",
            features: ["Basic task creation", "10 tasks max"]
        },
        {
            tier: "Pro",
            price: "$10",
            features: ["Unlimited tasks", "Categories", "Dark mode"]
        },
        {
            tier: "Team",
            price: "$30",
            features: ["Shared workspace", "Priority support"]
        }
    ]
    // const free = [
    //     'Basic task creation', '10 tasks max']
    // const pro = ['Unlimited tasks', 'Categories', 'Dark mode']
    // const team = ['Shared workspace', 'Priority support']

    return(
       <>
           <div className="flex flex-col lg:flex-row justify-center items-center gap-3.5 lg:gap-7.5">
       {card.map((c) => (
        
                <PricingCard tier={c.tier} price={c.price} features={c.features} />
            )
            
        )}
        </div>
       </> 
        
        // <PricingCard tier='free' price={0} features={free.map((id, free) => {
            //   return ( <ul >
            
        //         <li>{free}</li>
        //     </ul>)
        // })} />
    )
}

export default PricingSection;