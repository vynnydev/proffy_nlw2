import React from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrivel que você quer dar aulas!!">
        <form action="" id="search-teacher">

          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="subject"/>
          </div>

        </form>
      </PageHeader>
    </div>
  )
}

export default TeacherForm