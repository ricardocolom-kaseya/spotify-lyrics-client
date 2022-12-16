import React from 'react'

const code = new URLSearchParams(window.location.search).get('code')

export default function Callback({changeCode}) {

    console.log("In Callback component")
    changeCode(code)
    
    return (
        <div>Callback</div>
    )
}
