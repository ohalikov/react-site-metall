import React from 'react'
import FullForm from '../common/full-form/FullForm'
import './main-section.css'
import '../common/full-form/full-form.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainSection = () => {
  return (
    <div className='main-section'>
      <div className='main-section__overlay-background section-paddings'>
        <Container fluid>
          <Row>
            <Col lg={7}>
              <h1 className='main-section__h1'>Монтаж <span className='main-section__h1__span'>быстровозводимых зданий</span> в Тюмени</h1>
              <p className='main-section__paragraph text-light-paragraph'>Дешевле, чем от производителей. Договор. Гарантия 5 лет. <br/>
              И экономия вашего бюджета, благодаря грамотным техническим решениям.</p>
            </Col>
            <Col lg={5}>
              <FullForm />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  
  )
}
export default MainSection