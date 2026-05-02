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
      <div className="flex flex-col lg:flex-row justify-center items-center gap-3.5 lg:gap-7.5">
        <PricingCard variant="free" tier="Free" recommendation="Perfect if you are just starting out" price="$0" features={["Basic task creation", "10 tasks max"]} />
        <PricingCard variant="pro" tier="Pro" recommendation="Best for people juggling a lot of tasks" price="$10" features={["Unlimited tasks", "Categories", "Dark mode"]} popular />
        <PricingCard variant="team" tier="Team" recommendation="Everything your team needs to progress" price="$30" features={["Shared workspace", "Priority support"]} />
        {/* {card.map((c) => (
          <PricingCard tier={c.tier} price={c.price} features={c.features} />
        ))} */}
      </div>
    </>
  );
}

export default PricingSection;
