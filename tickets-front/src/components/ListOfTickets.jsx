export function ListOfTickets() {
    const tickets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const $ticketsContainer = document.getElementById('tickets-container');
    tickets.forEach(ticket => {
        if (ticket) {

        }
    })
    return (
        <div className="container text-center my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                <h2 className="lead display-6 fw-bold">LISTA DE BOLETAS</h2>
                <span className="text-muted">Descuentos activados</span>
                <span className="my-2">0 BOLETO SON ¡GRATIS!</span>
                <div className="container my-2">
                    <button className="btn btn-outline-primary mx-4"> - </button>
                    <span> 1 </span>
                    <button className="btn btn-outline-primary mx-4"> + </button>
                </div>
                <span className="fw-bold fs-4">Total: 140.000 $</span>
                <span className="fs-6 text-muted">Boleto: 140.000 $</span>
                <div className="container">
                    <form className="w-50 mx-auto d-flex justify-content-center text-center">
                        <input className="form-control me-2 w-25 shadow-lg" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <button className="my-2 btn btn-outline-primary">ELEGIR A LA SUERTE</button>
                </div>

                <div className="container" id="tickets-container" data-spy="scroll">

                </div>
            </div>
        </div>
    )
}