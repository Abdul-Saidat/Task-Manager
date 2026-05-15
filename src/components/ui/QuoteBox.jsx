import { useQuote } from "../hooks/useQuote";
const QuoteBox = () => {
  const { quote, loading, error, refetch } = useQuote();

  if (loading) return <p>Loading...</p>;
  if (error) return <p> {error} </p>;

  return (
    <div>
      <p> {quote} </p>
      <button
        className="mt-5 rounded-md px-3 py-3 text-white bg-black/90 hover:bg-black dark:bg-indigo-400 cursor-pointer"
        onClick={refetch}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;
