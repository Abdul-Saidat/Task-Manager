function PricingCard({ tier, price, features }) {
  return (
   <div className="border rounded-[10px] px-5 py-3 lg:py-6 border-[#555] w-65 bg-[#7bb8e6]">
        <h2>{tier}</h2>
        <p>
          <span>{price}</span>
        </p>
        <button>Get started</button>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          {/* <li>Basic task creation</li> */}
        </ul>
      </div>
  );
}

export default PricingCard;
