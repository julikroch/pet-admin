import React, {Fragment, useState} from "react";
import {v4 as uuid} from "uuid";
import PropTypes from "prop-types";

const Formulario = ({crearCita}) => {
    
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();
        
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return
        }
        
        actualizarError(false);
        cita.id = uuid();

        crearCita(cita)

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return(
        <>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatiorios</p>: null}

            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre Dueno</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueno"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;