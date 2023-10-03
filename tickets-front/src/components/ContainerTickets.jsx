import { Buttons } from "./Buttons";
import { FormPagos } from "./FormPagos";
import { Tickets } from "./Tickets";

const tickets = [
    {
        number: 1,
        name: 'Juan Quintero',
        isSelect: true
    },
    {
        number: 2,
        name: '',
        isSelect: false
    },
    {
        number: 3,
        name: 'JuaneFe14',
        isSelect: true
    },
    {
        number: 4,
        name: '',
        isSelect: false
    },
    {
        number: 5,
        name: 'eFe14',
        isSelect: true
    },
    {
        number: 6,
        name: '',
        isSelect: false
    },
    {
        number: 7,
        name: '',
        isSelect: false
    },
    {
        number: 8,
        name: '',
        isSelect: false
    },
    {
        number: 9,
        name: '',
        isSelect: false
    },
    {
        number: 10,
        name: '',
        isSelect: false
    },
]

export function ContainerTickets() {
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
                            tickets.map(({ number, name, isSelect }) => (
                                <Tickets
                                    key={number}
                                    number={number}
                                    name={name}
                                    initialIsSelect={isSelect}
                                >
                                </Tickets>
                            ))
                        }
                        <div className="text-muted">
                            Seleccionadas: <span> </span>
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
