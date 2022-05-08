import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    console.log(user);

    useEffect(() => {
        if (!email) {
            return;
        }
        const url = 'https://primax-electronics.herokuapp.com/login';
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem('Primax-Electronics-Access-Token', data.token);
                    setToken(data.token);
                }
            })
            .catch(err => console.log(err))
    }, [email])

    return [token];
}
export default useToken;