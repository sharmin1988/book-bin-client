import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('')
    const [tokenError, setTokenError] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://book-bin-server.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {

                    if (data.access_token) {
                        localStorage.setItem('accessToken', data.access_token);
                        setToken(data.access_token)
                    }
                    else{
                        setTokenError(data.message)
                    }
                })
        }
    }, [email])
    return [token, tokenError]
}
export default useToken