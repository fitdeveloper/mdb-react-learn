import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import "./index.css";
import {
    MDBBtn, MDBInput, MDBModal, MDBModalBody,
    MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge,
    MDBContainer, MDBRow, MDBCol,
} from "mdbreact";




// 4 . using bootstrap in react  Grid concept
/*
5 different screen sizes in bootstrap : 
extra small : default  .col-
small : sm     .col-sm-
medium : md    .col-md-
large : lg     .col-lg-
extra large : xl   .col-xl-

*/
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            events: [
                {
                    id: 1,
                    time: "10:00",
                    title: "Breakfast with Simon",
                    location: "Lounge Caffe",
                    description: "Discuss Q3 targets"
                },
                {
                    id: 2,
                    time: "10:30",
                    title: "Daily Standup Meeting (recurring)",
                    location: "Warsaw Spire Office"
                },
                { id: 3, time: "11:00", title: "Call with HRs" },
                {
                    id: 4,
                    time: "11:00",
                    title: "Lunch with Timothy",
                    location: "Canteen",
                    description:
                        "Project evaluation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a"
                }
            ]
        };
    }


    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    handleDelete = eventId => {
        const events = this.state.events.filter(e => e.id !== eventId);
        this.setState({ events });
    };

    myFunction() {


        var myArray = [];
        var i;
        for (i = 0; i < this.state.events.length; i++) {
            myArray[i] = (
                <Event
                    key={this.state.events[i].id}
                    id={this.state.events[i].id}
                    time={this.state.events[i].time}
                    title={this.state.events[i].title}
                    location={this.state.events[i].location}
                    description={this.state.events[i].description}

                />
            );
        }
        return myArray;


        // var  text = "";
        // var i;
        // for(i = 0 ; i< 5 ; i++ ){
        //     text += " the number  is " + i + " ";
        // }
        // return text;
    }


    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue
        });
    };

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

                {/* <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9">
                            {this.myFunction()} */}
                {/*  using maps here look code bellow   */}
                {/* {this.state.events.map(event => (
                                <Event time={event.time} title={event.title} />
                            ))} */}



                {/* <Event title="this the agenda title" time="12/21/1223">
                                Meeting with John
                            </Event> */}
                {/* </MDBCol>
                        <MDBCol md="3" >
                        </MDBCol>
                    </MDBRow>
                </MDBContainer> */}

                <React.Fragment>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="9" className="mb-r">
                                <h2 className="text-uppercase my-3">Today:</h2>
                                <div id="schedule-items">
                                    {this.state.events.map(event => (
                                        <Event
                                            key={event.id}
                                            id={event.id}
                                            time={event.time}
                                            title={event.title}
                                            location={event.location}
                                            description={event.description}
                                            onDelete={this.handleDelete}
                                        />
                                    ))}
                                </div>
                                <MDBRow className="mb-4">
                                    <MDBCol xl="3" md="6" className="mx-auto text-center">
                                        <MDBBtn color="info" rounded onClick={this.toggleModal}>
                                            Add Event
                  </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                            <MDBCol md="3">
                                <h3 className="text-uppercase my-3">Schedule</h3>
                                <h6 className="my-3">
                                    It's going to be busy that today. You have{" "}
                                    <b>{this.state.events.length} events </b> today.
              </h6>
                                <h1 className="my-3">
                                    <MDBRow>
                                        <MDBCol xs="3" className="text-center">
                                            <MDBIcon icon="sun" fixed />
                                        </MDBCol>
                                        <MDBCol xs="9">Sunny</MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol xs="3" className="text-center">
                                            <MDBIcon icon="thermometer-three-quarters" fixed />
                                        </MDBCol>
                                        <MDBCol xs="9">23°C</MDBCol>
                                    </MDBRow>
                                </h1>
                                <p>
                                    Don't forget your sunglasses. Today will dry and sunny, becoming
                                    warm in the afternoon with temperatures of between 20 and 25
                                    degrees.
              </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
                        <MDBModalHeader
                            className="text-center"
                            titleClass="w-100 font-weight-bold"
                            toggle={this.toggleModal}
                        >
                            Add new event
                        </MDBModalHeader>
                        <MDBModalBody>
                            <form className="mx-3 grey-text">
                                <MDBInput
                                    name="time"
                                    label="Time"
                                    icon="clock"
                                    hint="12:30"
                                    group
                                    type="text"
                                    getValue={this.handleInputChange("time")}
                                />
                                <MDBInput
                                    name="title"
                                    label="Title"
                                    icon="edit"
                                    hint="Briefing"
                                    group
                                    type="text"
                                    getValue={this.handleInputChange("title")}
                                />
                                <MDBInput
                                    name="location"
                                    label="Location (optional)"
                                    icon="map"
                                    group
                                    type="text"
                                    getValue={this.handleInputChange("location")}
                                />
                                <MDBInput
                                    name="description"
                                    label="Description (optional)"
                                    icon="sticky-note"
                                    group
                                    type="textarea"
                                    getValue={this.handleInputChange("description")}
                                />
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter className="justify-content-center">
                        </MDBModalFooter>
                    </MDBModal>
                </React.Fragment>
            </React.Fragment>
        );
    }
}



// 7 . state 
/* 

-- passing data from class to another. 
-- tag values (call from the parent): this.props.children 
-- tag attributes ( call from the parent ): this.props.[NameAttribute]
-- curly braces : to render anything dynamically in react { valide JS Expression }
-- Immurabilty of props can't be changed  props ( read only in parent )  ==> solution  == > state . 
-- to change value we simply can use setState()
-- Asynchrounous request ==>  setState() == reRender
-- Combining state and object 


*/


// 8 . Loops and map 
/* we can either use loop for inside function js and then call is on JSX or just use map fucntions
{this.state.events.map(event => (
    <Event time={event.time} title={event.title} />
  ))}

  for not working directly on the render
  map work directly on render 

  each value on map / loop should have a key 

*/


// 9 . if else in react 
/*

function Hello(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return "Hello!";
    }
    return "Please login first!";
  }
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Hello isLoggedIn={false} />,
    document.getElementById("root")
  );

*/


// 10 . delete events -> using handle
/*   

*/
class Event extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         time: this.props.time,
    //         title:  this.props.title,
    //     }
    // }
    render() {
        return (
            //     <React.Fragment>
            //         <h3>{this.props.time} -9:00 - {this.props.title}</h3>
            //         {this.props.location && <h6>Location: {this.props.location}</h6>}
            //         {this.props.description && (
            //             <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
            //                 {this.props.description}
            //             </p>
            //         )}
            //         {/* <button
            //     onClick={() => {
            //       this.setState({ title: "Me NEW state title" });
            //       console.log(this.state.title);
            //     }}
            //   >
            //     Change state title
            //   </button> */}

            //     </React.Fragment>
            <React.Fragment>
                <div className="media mt-1">
                    <h3 className="h3-responsive font-weight-bold mr-3">
                        {this.props.time}
                    </h3>
                    <div className="media-body mb-3 mb-lg-3">
                        <MDBBadge color="danger" className="ml-2 float-right" onClick={() => this.props.onDelete(this.props.id)}
                        >
                            -
            </MDBBadge>
                        <h6 className="mt-0 font-weight-bold">{this.props.title} </h6>{" "}
                        <hr className="hr-bold my-2" />
                        {this.props.location && (
                            <React.Fragment>
                                <p className="font-smaller mb-0">
                                    <MDBIcon icon="location-arrow" /> {this.props.location}
                                </p>
                            </React.Fragment>
                        )}
                    </div>
                </div>
                {this.props.description && (
                    <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
                        {this.props.description}
                    </p>
                )}
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



{/* <p>Result: {2 + 2}</p> */ }
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

{/* <button onClick={ (this.props.title = "new Title")}>Change my title</button> */ }
