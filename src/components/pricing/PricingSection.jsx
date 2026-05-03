import PricingCard from "./PricingCard";

function PricingSection() {
  const card = [
    {
      tier: "Free",
      price: "$0",
      features: ["Basic task creation", "10 tasks max"],
      variant: "free"
    },
    {
      tier: "Pro",
      price: "$10",
      features: ["Unlimited tasks", "Categories", "Dark mode"],
      variant: "pro",
    },
    {
      tier: "Team",
      price: "$30",
      features: ["Shared workspace", "Priority support"],
      variant: "team"
    },
  ];
  return (
    <>
    <section>
    <div className="mb-10 text-center">
      <h2 className="text-xl lg:text-3xl font-bold">Pricing Plan</h2>
      <p className="text-gray-500">Choose a plan that works for you</p>
    </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
    {/* <header className="">Pricing Section</header> */}
        <PricingCard variant="free" tier="Free" recommendation="Great for getting started with basic task management." price="$0" frequency="One time" features={["Basic task creation", "10 tasks max", "Local storage only"]} buttonClassName="border border-gray-400 hover:bg-gray-100" />
        <PricingCard variant="pro" tier="Pro" recommendation="Perfect for individuals managing tasks at scale." price="$10" frequency="/month" features={["Unlimited tasks", "Advanced filtering", "Dark mode", "Progress analytics"]} popular buttonClassName="bg-white text-indigo-600 hover:bg-gray-100" />
        <PricingCard variant="team" tier="Team" recommendation="Best for teams managing shared workflows" price="$30" frequency="/month" features={["Shared workspace", "Team dashboards", "Collaboration tools", "Priority support", "Category Creation"]} buttonClassName="border border-white/40 hover:bg-white/10 text-white" />
        {/* {card.map((c) => (
          <PricingCard tier={c.tier} price={c.price} features={c.features} />
          ))} */}
      </div>
          </section>
    </>
  );
}

export default PricingSection;
