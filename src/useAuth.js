import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code) {

    const [accessToken, setAccessToken] = useState(undefined)
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post("http://localhost:4000/login", {
            code
        }).then(res => {

            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)

            //window.history.pushState({}, null, "/")

        }).catch(
            (err) => {
                console.log(err);
                console.log('error')
                //window.location = "/"
            }
        )
    }, [])

    return accessToken
}