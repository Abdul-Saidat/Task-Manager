import { useQuote } from "../hooks/useQuote"
const QuoteBox = () => {
    const { quote, loading, error, refetch} = useQuote()

    if (loading) return <p>Loading...</p>
    if (error) return <p> {error} </p>

    return (
        <div>
            <p> {quote} </p>
            <button onClick={refetch}>New Quote</button>
        </div>
    )
}

export default QuoteBox