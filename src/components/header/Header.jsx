import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import images from '../../constants/images';


import './header.css';



const Header = () => {
  return (
    <header className='header-block'>
      <Container fluid>
        <Row>
        
          <div className='header-block__top'>
            <div className='header-block__left'>
                  <a href="/" className='header-block__top__image-section'>asdfas
                    {/* <img src="https://picsum.photos/seed/picsum/200/300" className='header-block__top__image-section__logo-img' alt="Логотип Возведения металлоконструкций"/>*/}
                  </a>
            </div>
            <div className='header-block__right'>
              
              <div className='header-block__right__block-item'>
                <div className='header-block__right__block-item__icon'>
                  <img className="fluid" src={images.loc} alt="" />
                </div>
                <div className='header-block__right__block-item__text'>
                  43 объекта<br/> обслуживаем каждый год
                </div>
              </div>

              <div className='header-block__right__block-item'>
                <div className='header-block__right__block-item__text'>
                  Работаем 24 часа <span className='text-span-color'>И вывозим с 2005 года</span>
                </div>
              </div>

              <div className='header-block__right__block-item'>
                <div className='header-block__right__block-item__icon'>
                  <img className="fluid" src={images.env} alt="Отправьте ваше письмо нам" />
                  
                  <div className='header-block__right__block-item__icon'>
                    <img className="fluid" src={images.phone} alt="Позвоните нам" />
                  </div>

                </div>
                <div className='header-block__right__block-item__text'>
                  <span className="mail">info@montaj.ru</span> 
                  <a href="tel:+73452519160" className="header-block__right__phone">+7 (3452) 11-11-11</a>
                </div>
              </div>

            </div>

          </div>
          <div className='header-block__bottom'>

          </div>
        </Row>
      </Container>
    
    </header>
  )
}

export default Header