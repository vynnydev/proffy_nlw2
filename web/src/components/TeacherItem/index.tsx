import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import avatar from '../../assets/images/vini.jpeg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="avatar" />
        <div>
          <strong>Vinicius Prudencio</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br></br>
        Apaixonado por explodir coisas em laboratório e por mudar
        a vida 
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem