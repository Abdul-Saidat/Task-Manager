import { useQuote } from "../hooks/useQuote"
const QuoteBox = () => {
    const { quote, loading, error, refetch} = useQuote()

    if (loading) return <p>Loading...</p>
    if (error) return <p> {error} </p>

    return (
        <div className="">
            <p> {quote} </p>
            <button className="mt-5 border rounded-md px-3 py-3 text-white bg-black cursor-pointer" onClick={refetch}>New Quote</button>
        </div>
    )
}

export default QuoteBox