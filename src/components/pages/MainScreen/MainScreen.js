import React from 'react';  
import './MainScreen.css';  
import Card from './Card';  
import { cardsData } from './CardsData';   
import { Row, Col } from 'react-bootstrap';   

const MainScreen = () => {  
  return (  
    <Row style={{ padding: '10px' }} className='MainScreen'>  
      <Col xs={12} md={7}>  
        <Row>  
          {cardsData.map((card, index) => (  
            <Col xs={12} sm={6} key={index}>  
              <Card title={card.title} description={card.description} icon={card.icon} link={card.link} />  
            </Col>  
          ))}  
        </Row>  
      </Col>  
      <Col md={5}>  
        <div style={{ padding: '20px', backgroundColor: '#f0f2f5', height: '100%', borderRadius: '8px' }}>  
         <img src='https://cdn.dribbble.com/users/19417/screenshots/5509283/wytitu_dribbble_800x600.gif' alt='llm' style={{ width: '100%',borderRadius:"10%" }} />  
        </div>  
      </Col>  
    </Row>  
  );   
};  

export default MainScreen;