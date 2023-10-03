import { useState } from 'react'

export function Tickets({ number, name, initialIsSelect }) {
    const [isSelect, setIsSelect] = useState(initialIsSelect)

    const buttonClassName = isSelect
        ? 'btn btn-primary btn-sm mx-1'
        : 'btn btn-outline-primary btn-sm mx-1'

    const handleClick = () => {
        setIsSelect(!isSelect)
    }


    return (
        <button type='button' key={number} className={initialIsSelect ? 'btn btn-primary btn-sm m-1 disabled' : buttonClassName} onClick={handleClick}>{number}</button>
    )
}
