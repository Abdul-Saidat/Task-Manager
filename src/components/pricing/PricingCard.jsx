const variantStyles = {
  free: "bg-white text-gray-800 border border-gray-200",
  pro: "bg-indigo-600 text-white",
  team: "bg-slate-800 text-white",
}


function PricingCard({ variant = "free", tier, recommendation, price, features, popular }) {
  return (
   <div className={`rounded-2xl px-3 lg:px-6 lg:py-10 flex flex-col gap-[10px] relative w-62.5 ${variantStyles[variant]}`}>
        {popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}
        <h3 className="text-center text-xl lg:text-2xl font-bold">{tier}</h3>
        <p> {recommendation} </p>
        <p className="text-[30px] font-bold">
          {price}
        </p>
        <button className="border rounded-lg px-2.5 py-2 mt-2 w-full">Get started</button>
        <ul className="mt-3">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          {/* <li>Basic task creation</li> */}
        </ul>
      </div>
  );
}

export default PricingCard;
