export function FormPagos() {
    return (
        <form className="container rounded-3 my-5">
            <fieldset className="text-start">
                <div className="row my-2">
                    <legend>Datos personales</legend>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-floating my-2">
                            <input type="text" className="form-control" placeholder="Juan Quintero" />
                            <label for="floatingInputGrid">Nombre Completo</label>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-floating my-2">
                            <div className="form-floating">
                                <input type="email" className="form-control" placeholder="jfquinterogu@cesde.net" />
                                <label for="floatingInputGrid">Correo Electronico</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="form-floating my-2">
                            <input type="text" className="form-control" placeholder="Juan Quintero" />
                            <label for="floatingInputGrid">Ciudad</label>
                        </div>
                    </div>
                </div>
                <div className="row g-2 my-2">
                    <legend>Metodos de Pago</legend>
                    <div className="col-sm-12 col-md-4">

                    </div>
                    <div className="col-sm-12 col-md-4">

                    </div>
                    <div className="col-sm-12 col-md-4">

                    </div>
                </div>
                <div className="row g-2 my-2">
                    <legend>Comprobante de Pago</legend>
                    <div className="col-sm-12 col-md-6">
                        <input type="file" className="form-control" placeholder="Seleccionar Archivo" />
                    </div>
                </div>
            </fieldset>
            <button type="button" className="btn btn-outline-primary btn-lg text-center">Confirmar</button>
        </form>
    )
}