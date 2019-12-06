import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Nombre propietario: {cita.propietario}</span></p>
            <p><span>Fecha: {cita.fecha}</span></p>
            <p><span>Hora: {cita.hora}</span></p>
            <p><span>Sintomas: {cita.sintomas}</span></p>
            <button
                className="btn btn-danger"
                onClick={() => eliminarCita(cita.id)}
            >Borrar &times;</button>

        </div>
    </div>
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;
