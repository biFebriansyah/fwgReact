import React, { useEffect, useState } from 'react'
import Header from './component/header'

function Example() {
    const [name, setName] = useState('')
    // getter, settter

    useEffect(() => {
        console.log('hook didmount')
        setName('fazztrack baru')
    }, [])

    useEffect(() => {
        console.log('hook didUpdate')
    }, [name])

    const changeName = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <Header />
            <div className="Example">
                <h1>Hello {name}</h1>
                <input onChange={changeName} type="text" />
            </div>
        </>
    )
}

export default Example
