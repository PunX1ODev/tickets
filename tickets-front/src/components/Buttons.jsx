import { useState } from 'react'

export function Buttons() {
    const [cantidadBoletos, setCantidadBoletos] = useState(1)
    const [total, setTotal] = useState(140)
    const [boletoGratis, setBoletoGratis] = useState(0)

    const calcularTotal = (cantidadBoletos) => {
        if (cantidadBoletos >= 1 && cantidadBoletos <= 4) {
            setBoletoGratis(1)
        } else if (cantidadBoletos > 4 && cantidadBoletos <= 8) {
            setBoletoGratis(2)
        } else if (cantidadBoletos > 8 && cantidadBoletos <= 10) {
            setBoletoGratis(3)
        }
        const total = 140 * cantidadBoletos
        setTotal(total)
    }

    const restar = () => {
        if (cantidadBoletos <= 1) {
            alert('La cantidad minima es 1')
            return
        } else {
            setCantidadBoletos(cantidadBoletos - 1)
            if (cantidadBoletos) {
                calcularTotal(cantidadBoletos - 1)
            }
        }

    }

    const sumar = () => {
        if (cantidadBoletos >= 10) {
            alert('La cantidad maxima es 10')
            return
        } else {
            setCantidadBoletos(cantidadBoletos + 1)
            if (cantidadBoletos) {
                calcularTotal(cantidadBoletos + 1)
            }
        }
    }

    return (
        <>
            <span className="my-2">{boletoGratis} BOLETO SON ¡GRATIS!</span>
            <div className="container my-2">
                <button type="button" onClick={restar} class="btn btn-outline-primary mb-3"> - </button>
                <span class="fw-bold fs-1 mx-3">{cantidadBoletos}</span>
                <button type="button" onClick={sumar} class="btn btn-outline-primary mb-3"> + </button>
            </div>
            <span className="fw-bold fs-4">Total: <span>{total}</span> $</span>
            <span className="fs-6 text-muted">Boleto: 140.000 $</span>
        </>


    )
}
