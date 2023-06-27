import React, { useEffect, useState } from 'react'
import Header from '../../component/header'

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'fazztrack'
        }
    }

    componentDidMount() {
        console.log('only when opening webiste')
    }

    render() {
        return <h1>Hello, {this.state.name}</h1>
    }
}

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
            <Header name={name} />
            <div className="Example">
                <h1>Hello {name}</h1>
                <input onChange={changeName} type="text" />
            </div>
        </>
    )
}

export default Example
