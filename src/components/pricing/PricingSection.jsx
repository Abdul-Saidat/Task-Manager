import PricingCard from "./PricingCard";

function PricingSection() {
  return (
    <>
      <section className="mt-10">
        <div className="mb-10 text-center">
          <h2 className="text-xl lg:text-3xl font-semibold text-center mt-6">
            Pricing Plan
          </h2>
          <p className="text-gray-500">Choose a plan that works for you</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-7">
          <PricingCard
            variant="free"
            tier="Free"
            recommendation="Great for getting started with basic task handling."
            price="$0"
            frequency="One time"
            features={[
              "Basic task creation",
              "10 tasks max",
              "Local storage only",
            ]}
            buttonClassName="border border-gray-400 hover:bg-gray-100"
          />
          <PricingCard
            variant="pro"
            tier="Pro"
            recommendation="Perfect for individuals managing tasks at scale."
            price="$10"
            frequency="/month"
            features={[
              "Unlimited tasks",
              "Advanced filtering",
              "Dark mode",
              "Progress analytics",
            ]}
            popular
            buttonClassName="bg-white text-indigo-600 hover:bg-gray-100"
          />
          <PricingCard
            variant="team"
            tier="Team"
            recommendation="Best for teams managing shared workflow"
            price="$30"
            frequency="/month"
            features={[
              "Shared workspace",
              "Team dashboards",
              "Collaboration tools",
              "Priority support",
              "Category Creation",
            ]}
            buttonClassName="border border-white/40 hover:bg-white/10 text-white"
          />
        </div>
      </section>
    </>
  );
}

export default PricingSection;
