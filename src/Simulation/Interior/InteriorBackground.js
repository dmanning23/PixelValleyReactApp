import React from 'react';
import GameWindowSize from '../../GameWindowSize';
import InteriorCharacters from './InteriorCharacters';
import LocationLabel from './LocationLabel';
import ExitButton from './ExitButton';
import LocationNavigationButton from './LocationNavigationButton';
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

    //get the previous and next location
    let prevLocation = null;
    let nextLocation = null;
    //Check if we are in a child location
    if (props.location.parentLocation != null) {
        //Check if we are in the first child location
        if (props.location.parentLocation.locations[0]._id === props.location._id) {
            prevLocation = props.location.parentLocation;
        }
        else if (props.location.parentLocation.locations.length > 1) {
            //We are in a child location and need to find the previous child location
            for (let i = 1; i < props.location.parentLocation.locations.length; i++) {
                if (props.location.parentLocation.locations[i]._id == props.location._id) {
                    prevLocation = props.location.parentLocation.locations[i - 1];
                    break;
                }
            }
        }

        //Get the next child location
        if (props.location.parentLocation.locations.length > 1) {
            for (let i = 0; i < props.location.parentLocation.locations.length; i++) {
                if (props.location.parentLocation.locations[i]._id == props.location._id) {
                    if (props.location.parentLocation.locations.length > i + 1) {
                        nextLocation = props.location.parentLocation.locations[i + 1];
                    }
                    break;
                }
            }
        }
    }
    else if (props.location.locations != null && props.location.locations.length >= 1) {
        //If we are in the parent object, the next location is the first child object
        nextLocation = props.location.locations[0];
    }

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
                    <ExitButton location={props.location}/>
                </Col>
                <Col xs={6} md={{ span: 6, offset: 2}} >
                    <LocationLabel location={props.location}/>
                </Col>
            </Row>
            <Row style={{padding: '16px'}}>
                {prevLocation && <Col xs={6} md={1}>
                    <LocationNavigationButton location={prevLocation} text='<-'/>
                </Col>}
                {prevLocation && nextLocation && <Col xs={6} md={{ span: 1, offset: 10}}>
                    <LocationNavigationButton location={nextLocation} text='->'/>
                </Col>}
                {!prevLocation && nextLocation && <Col xs={6} md={{ span: 1, offset: 11}}>
                    <LocationNavigationButton location={nextLocation} text='->'/>
                </Col>}
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