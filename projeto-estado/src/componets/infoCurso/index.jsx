// components/InfoCurso.js
import { useState } from 'react'
import './style.css'

function InfoCurso() {
    const [nome, setNome] = useState("Curso de React")  // Inicializa o nome
    const [cargaHoraria, setCargaHoraria] = useState(90)  // Carga horária inicial
    const [local, setLocal] = useState("Senai")           // Local inicial

    return (
        <div className='InfoCurso'>
            <h2>Dados do curso:</h2>
            <p>Nome: {nome}</p>
            <p>Carga horária: {cargaHoraria} horas</p>
            <p>Local: {local}</p>
        </div>
    )
}

export default InfoCurso