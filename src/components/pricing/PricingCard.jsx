const variantStyles = {
  free: "bg-white text-gray-800 border border-gray-200",
  pro: "bg-indigo-600 text-white scale-105",
  team: "bg-slate-800 text-white",
}

function PricingCard({ variant = "free", tier, recommendation, price, frequency, features, popular, buttonClassName }) {
  return (
   <div className={`rounded-3xl shadow-md p-4 lg:py-8 lg:px-5 flex flex-col min-h-107.5 gap-2.5 relative w-62.5 hover:shadow-xl transition duration-300 ${variantStyles[variant]}`}>
     <div className="flex flex-col h-full">

        {popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}
        <div>

        <h3 className="text-center text-xl lg:text-2xl font-bold">{tier}</h3>
        <p> {recommendation} </p>
        <p className="text-[30px] font-bold">
          {price}<span className="text-sm font-normal">{frequency}</span>
        </p>
        </div>
        <button className={`border rounded-lg px-2.5 py-2 mt-6 w-full ${buttonClassName}`}>Get started</button>
        <ul className="mt-3 lg:mt-6 space-y-3">
          {features.map((feature, index) => (
            <li className="flex items-center gap-2">

              <span>✓</span> <span key={index} className="text-sm leading-6"> {feature}</span>
            </li>
          ))}
          {/* <li>Basic task creation</li> */}
        </ul>
            </div>
      </div>
  );
}

export default PricingCard;
