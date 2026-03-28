// components/InfoAluno.js
import { useState } from 'react'
import './style.css'

function InfoAluno() {
    const nome = "Kayo Mario"
    const idade = "18"
    const curso = "Desenvolvimento de sistemas"

    return (
        <div className='Info-aluno'>
            <h2>Informações do Aluno:</h2>
            <p>Nome: {nome} </p>
            <p>Idade: {idade} </p>
            <p>Curso: {curso} </p>
        </div>
    )
}

export default InfoAluno