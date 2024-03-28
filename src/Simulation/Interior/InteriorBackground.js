import React from 'react';
import GameWindowSize from '../../GameWindowSize';
import InteriorCharacters from './InteriorCharacters';
import LocationLabel from './LocationLabel';
import ExitButton from './ExitButton';
import { Container, Row, Col, Button } from 'react-bootstrap';

const InteriorBackground = (props) => {

    const gameWindowSize = GameWindowSize({ width: 2048, height: 1024});

    let currentY = gameWindowSize.height * 0.22

    const divStyle = {
        position: 'relative'
    };

    const backgroundStyle = {
        position: 'absolute',
        zIndex: -1
    };

    return (
        <div style={divStyle}>
            <img
                src={`https://dyifmflum502e.cloudfront.net/${props.location.resizedImageInteriorFilename}`}
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                style={backgroundStyle}>
            </img>
            <Row style={{padding: '16px'}}>
                <Col xs={6} md={3}>
                    <ExitButton/>
                </Col>
                <Col xs={6} md={{ span: 6, offset: 2 }} >
                    <LocationLabel location={props.location}/>
                </Col>
            </Row>
            <InteriorCharacters
                location={props.location} 
                width={gameWindowSize.width}
                height={gameWindowSize.height}
                widthMultiplier={gameWindowSize.widthMultiplier * 0.83}
                heightMultiplier={gameWindowSize.heightMultiplier * 0.83} 
                y={currentY}/>
        </div>
      );
}

export default InteriorBackground;