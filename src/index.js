import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";


/*
5 different screen sizes in bootstrap : 
extra small : default  .col-
small : sm     .col-sm-
medium : md    .col-md-
large : lg     .col-lg-
extra large : xl   .col-xl-

*/
class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                {/* // <MDBContainer>
            //     <MDBRow>
            //         <MDBCol lg="6" >Left column</MDBCol>
            //         <MDBCol lg="6" >Right column</MDBCol>
            //     </MDBRow>
            // </MDBContainer> */}
                {/* <MDBContainer>
                <MDBRow>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
            </MDBRow>
            </MDBContainer> */}

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9"><Event title="this the agenda title" time="12/21/1223"> Meeting with John </Event></MDBCol>
                        <MDBCol md="3" ><Event time="12/21/1223"> Not a meeting with john</Event> </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </React.Fragment>
        );
    }
}

/* 

passing data from class to another. 
tag values (call from the parent): this.props.children 
tag attributes ( call from the parent ): this.props.[NameAttribute]
curly braces : to render anything dynamically in react { valide JS Expression }
Immurabilty of props can't be changed  props ( read only in parent )  ==> solution  == > state . 
to change value we simply can use setState()

*/
class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time,
            title:  this.props.title,
        }
    }
    render() {
        return (
            <React.Fragment>
                <h3>{this.props.time} -9:00 - {this.props.title}</h3>
                <button
            onClick={() => {
              this.setState({ title: "Me NEW state title" });
              console.log(this.state.title);
            }}
          >
            Change state title
          </button>
              
            </React.Fragment>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));


    // constructor() {
    //     super();
    //     this.vatTime = "12:00";
    //     this.varTitle = "My variable title";
    // }



      {/* <p>Result: {2 + 2}</p> */}
                {/* <p>Result: {this.state.id + 10}</p>
                <p>Result: {Date.now()}</p>
                <h3>
                    State:
                    {this.state.time} - {this.state.title}
                </h3>
                <h3>
                    Variable:
                    {this.vatTime} - {this.varTitle}
                </h3>
                <button onClick={
                    function () {
                         this.state.title = " new state updated "; // this not working in the DOM because not rendring the new value 
                         this.setState({ 
                             title : " new state updated"
                         })
                        console.log(this.state.title);
                    }.bind(this)
                }>
                    Change my title state </button>

                <button onClick={
                    function () {
                        this.varTitle = " new state updated ";
                        console.log(this.varTitle);
                    }.bind(this)
                }>
                    Change my title state </button> */}

                                    {/* <button onClick={ (this.props.title = "new Title")}>Change my title</button> */}
