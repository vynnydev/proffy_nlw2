import React from 'react'

import { TeacherItemComponent } from './styles'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
    <TeacherItemComponent>
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/45184364?s=460&u=cfac92d4197bedf804d9df43933201e1f4a0dd45&v=4"
          alt="vynnydev"
        />
        <div>
          <strong>Vini Dev</strong>
          <span>Investimentos</span>
        </div>
      </header>

      <p>
        Entusiasta dos por tecnologias de desenvolvimento.
        <br />
        <br />
        Apaixonado pelas linguagens JavaScript e TypeScript e por suas tecnologias Node, 
        React, React Native que compõe e backend, frontend e mobile maravilhosamente!!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </TeacherItemComponent>
  )
}

export default TeacherItem
