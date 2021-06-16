import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';
import '../style.css';



export default class EventDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: this.props.showModal, 
            eventDetail: {
                id: this.props.eventType === 'add' ? this.props.newIndex : this.props.eventInfo.id,
                title: this.props.eventInfo && this.props.eventInfo.title ? this.props.eventInfo.title  : null,
            }
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({showModal: nextProps.showModal,
            eventDetail: {
                id: nextProps.eventType === 'add' ? nextProps.newIndex : nextProps.eventInfo.id,
                title: nextProps.eventInfo && nextProps.eventInfo.title ? nextProps.eventInfo.title  : ''

            }});
    }


    render(){
        return (
            <Modal  show={this.state.showModal}
          onHide={this.props.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Add Events
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <label> Event Name </label>
              <input type="text" className="form-control" placeholder="Enter the Event Name" ref="title"
              value={this.state.eventDetail.title} onChange={(e) => this.changeHandler(e, "title")}/>
                <label> Descriptions </label>
               <textarea className="form-control" placeholder="Add Description..." ref="notes" value={this.state.eventDetail.notes} 
               onChange={(e) => this.changeHandler(e, "notes")}/>
 
          </Modal.Body>
          <Modal.Footer>
          {this.props.eventType === 'add' ? <Button bsStyle="success" onClick={() => this.props.addEvent(this.state.eventDetail)}>Add</Button>  : 
          <Button bsStyle="warning" onClick={() => this.props.updateEvent(this.state.eventDetail)}>Update</Button> }
            {this.props.eventType === 'add' ? null : <Button bsStyle="danger" onClick={() => this.props.deleteEvent(this.state.eventDetail.id)}>Delete</Button> }
            <Button onClick={this.props.handleHide}>Close</Button>
          </Modal.Footer>

            </Modal>
            );
    }
}