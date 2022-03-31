import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import Random_Images from './Random_Images';
import './header.css'
export class ListOfImages extends Component {
  render() {
    return (
      <div>

      
            <Row >
                <Col xs={1} sm={1} className="images">
                    <img src={this.props.image} alt="txt"/>
                    <p>{this.props.text}</p>
                   
                </Col>
            </Row>
            
            </div>
        );
   
  }
}

export default ListOfImages;