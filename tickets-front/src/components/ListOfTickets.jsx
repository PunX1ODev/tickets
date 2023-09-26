export function ListOfTickets() {

    //#region atributos
    const ticketNumbers = document.getElementById("ticketNumbers");
    const textTotal = document.getElementById("total");
    const seleccionadas = document.getElementById("seleccionadas");

    const containerTickets = document.getElementById("containerTickets");
    const selectedTickets = document.getElementById("selectedTickets");
    //#endregion

    //#region funciones
    // con problemas
    const total = () => {
        const total = parseInt(ticketNumbers.textContent) * 140000;
        textTotal.textContent = `${total.toString()}`;
    };


    const obtenerTickets = (tickets) => {
        tickets.forEach((number) => {
            const btnTicket = document.createElement("button");
            btnTicket.className = "btn btn-outline-primary m-1";
            btnTicket.style.width = "5rem";

            btnTicket.id = `ticket${number}`;
            btnTicket.textContent = `${number}`;

            containerTickets.appendChild(btnTicket);

            selectTicket(btnTicket);
        });
    };
    //#endregion

    //#region eventos
    const selectTicket = (btnTicket) => {
        btnTicket.addEventListener("click", (e) => {
            e.preventDefault();
            if (btnTicket.classList.contains("active")) {
                btnTicket.classList.remove("active");
                const clonedTicket = selectedTickets.querySelector(`#${btnTicket.id}`);
                if (clonedTicket) {
                    selectedTickets.removeChild(clonedTicket);
                    let result = 0;
                    if (seleccionadas.textContent >= 0) {
                        result = seleccionadas.textContent =
                            parseInt(seleccionadas.textContent) - 1;
                        if (result !== 0) {
                            seleccionadas.textContent = `${result}`;
                        }
                    }
                }
            } else {
                if (seleccionadas.textContent === ticketNumbers.textContent) {
                    alert(`Solo puedes seleccionar ${ticketNumbers.textContent} boletas`);
                    return;
                }

                btnTicket.classList.add("active");
                const clonedTicket = btnTicket.cloneNode(true);
                selectTicket(clonedTicket);
                selectedTickets.appendChild(clonedTicket);
                let result = 0;

                result = seleccionadas.textContent =
                    parseInt(seleccionadas.textContent) + 1;

                if (result !== 0) {
                    seleccionadas.textContent = `${result}`;
                }
            }
        });
    };

    const restar = () => {
        let result = 0;
        if (ticketNumbers.textContent > 1) {
            result = ticketNumbers.textContent =
                parseInt(ticketNumbers.textContent) - 1;
            if (result !== 0) {
                total();
            }
        } else {
            alert("Minimo debes comprar una boleta");
        }
    }

    const sumar = () => {
        let result = 0;
        if (ticketNumbers.textContent >= 10) {
            alert("Solo puedes comprar 10 boletas");
            return;
        }
        result = ticketNumbers.textContent =
            parseInt(ticketNumbers.textContent) + 1;
        if (result !== 0) {
            total();
        }
    }
    //#endregion

    return (
        <div className="container text-center my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                <h2 className="lead display-6 fw-bold">LISTA DE BOLETAS</h2>
                <span className="text-muted">Descuentos activados</span>
                <span className="my-2">0 BOLETO SON ¡GRATIS!</span>
                <div className="container my-2">
                    <button type="button" onClick={restar} class="btn btn-outline-primary mb-3"> - </button>
                    <span class="fw-bold fs-1 mx-3" id="ticketNumbers">1</span>
                    <button type="button" onClick={sumar} class="btn btn-outline-primary mb-3"> + </button>
                </div>
                <span className="fw-bold fs-4">Total: <span id="total"> </span> $</span>
                <span className="fs-6 text-muted">Boleto: 140.000 $</span>
                <div className="container">
                    <form className="w-50 mx-auto d-flex justify-content-center text-center">
                        <input className="form-control me-2 w-25 shadow-lg" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <button type="button" className="my-2 btn btn-outline-primary">ELEGIR A LA SUERTE</button>
                </div>

                <div className="scroll" id="containerTickets" data-spy="scroll">

                </div>
                <div className="text-muted">
                    Seleccionadas: <span id="seleccionadas">0</span>
                </div>
                <div id="selectedTickets"> </div>
            </div>
        </div>
    )
}









