import { useEffect, useState } from "react"


export const useQuote = () => {
    const [quote, setQuote] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchQuote = async () => {
        try {
            setLoading(true)
            setError("")
            // const res = await fetch("https://dummyjson.com/quotes/random")
            const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
                headers: {
                    "X-Api-Key": "rPzHOxRLLJ767UWp6SfbEEpTp3OW1iMFc9mB023W"
                }
            })

            if (!res.ok) {
                throw new Error("Request failed")
            }
            const data = await res.json()
            console.log("response:", res);
            
            setQuote(`${data[0].quote} - ${data[0].author}`)
        } catch (error) {
            setError("Failed to load quotes")
            console.error(error);
            
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return {quote, loading, error, refetch: fetchQuote}
}