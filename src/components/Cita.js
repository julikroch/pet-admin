import PropTypes from "prop-types";

const Cita = ({cita, eliminarCita}) => {

    const { mascota, propietario, fecha, hora, sintomas } = cita

    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueno: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button
                className="buitton eliminar u-full-width"
                onClick={ () => eliminarCita(cita.id) }
            >Eliminar &times; </button>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita