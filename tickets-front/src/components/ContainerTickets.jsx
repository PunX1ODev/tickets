import { useState } from 'react';
import { Buttons } from "./Buttons";
import { FormPagos } from "./FormPagos";


const tickets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


export function ContainerTickets() {
    const [seleccionadas, setSeleccionadas] = useState('')

    return (
        <section className="container text-center my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg">
                <h2 className="lead display-6 fw-bold">LISTA DE BOLETOS</h2>
                <span className="text-muted">Descuentos activados</span>
                <Buttons />
                <section className="container">
                    <form className="w-50 mx-auto d-flex justify-content-center text-center">
                        <input className="form-control me-2 w-25 shadow-lg" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <button type="button" className="my-2 btn btn-outline-primary">ELEGIR A LA SUERTE</button>
                    <article className='container'>
                        {
                            tickets.map((number) => (
                                <button type="button" key={number} className='btn btn-outline-primary btn-sm'>{number}</button>
                            ))
                        }
                        <div className="text-muted">
                            Seleccionadas: <span>{seleccionadas}</span>
                        </div>
                    </article>
                    <article className='container'>
                        <FormPagos />
                    </article>
                </section>
            </div>
        </section>

    )
}
