export function Verificador() {
    return (
        <div className="container w-50 text-center my-5 rounded-3 shadow-sm">
            <section className="row p-5 align-items-center rounded-3 border">
                <h1>VERIFICADOR DE BOLETO</h1>
                <form className="mx-auto text-center">
                    <input className="form-control" type="number" placeholder="Digita el Numero de Boleto" />
                    <div class="form-text" >Numero De Boleto</div>
                    <button type="button" className="btn btn-outline-primary btn-lg">Buscar</button>
                </form>
            </section>
        </div>
    )
}