import React from 'react'
import './full-form.css'

function FullForm() {
  return (
    <form action="mail.php" method="post" className="open-form form-size-constuctions">
        <p className='open-form__label-text open-form__padding-tag-p'>Обсудить любой вопрос</p>
        <p className='open-form__label-text'>Это Бесплатно!</p>  
        <input id="phone1" type="text" className="open-form__input-field" name="teleph" placeholder="+7 (3452) 11-11-11" required="" />
        <div className="politic-conf">
            <input type="checkbox" id="politic" name="politic" checked="" required="" />
            <label for="politic" class="text__politic-conf">Принимаю политику
                конфиденциальности</label>
        </div>
        <input type="submit" class="btn btn-primary" value = "Перезвоним за 1 минуту" />
    </form>
  )
}

export default FullForm