import React from 'react'
import Logo from '../../assets/logo-white.png'

const Navigation = () => {
  return (
    <nav>
        <a href="/cadastro" className="items">😨 Perdi meu bichinho</a>
        <a href="/cadastro" className="items">😱 Encontrei um bichinho</a>
        <a href="/pets"><img src={Logo} alt="Logo"/></a>
        <a href="/cadastro" className="items">🥰 Quero adotar um animalzinho</a>
        <a href="/maps" className="items">📌 Localizar um animalzinho</a>
    </nav>
  )
}

export default Navigation