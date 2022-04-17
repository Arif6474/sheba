import { useEffect, useState } from "react"

const useServicing = () => {
    const [servicing, setServicing] = useState([]);
    useEffect(() => {
        fetch('servicing.json')
        .then(res => res.json())
        .then(data => setServicing(data))
    },[])

    return [servicing, setServicing]
}


export default useServicing;