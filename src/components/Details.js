import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

// class component
class Details extends Component {
    //class property, replaces the hooks in class componenets
    state = { loading: true, showModal: false };

    // shortcut for the following, allowed through:

    // @babel/eslint-parser
    // @babel/plugin-proposal-class-properties
    // @babel/preset-env

    // constructor() {
    //     super();
    //     this.state = { loading: true };
    // }

    async componentDidMount() {
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}` // match.params = syntax to get the ID from the route (withRouter)
        );

        const json = await response.json();

        this.setState(
            Object.assign(
                {
                    loading: false
                },
                json.pets[0]
            )
        );
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });

    adopt = () => (window.location = "http://bit.ly/pet-adopt");

    render() {
        if (this.state.loading) {
            return <h2>Loading...</h2>;
        }

        const {
            animal,
            breed,
            city,
            state,
            description,
            name,
            images,
            showModal
        } = this.state;

        // throw new Error("this is an error"); // example to demonstrate ErrorBoundary

        return (
            <div className="details">
                <div>
                    <Carousel images={images} />

                    <h1>{name}</h1>

                    <h2>
                        {animal} - {breed} - {city}, {state}
                    </h2>

                    <p>{description}</p>

                    <ThemeContext.Consumer>
                        {(
                            theme // theme is an hook (array)
                        ) => (
                            <button
                                onClick={this.toggleModal}
                                style={{ backgroundColor: theme[0] }}
                            >
                                Adopt {name}
                            </button>
                        )}
                    </ThemeContext.Consumer>

                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {name} ?</h1>
                                <div className="buttons">
                                    <button onClick={this.adopt}>Yes</button>
                                    <button onClick={this.toggleModal}>
                                        No
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </div>
            </div>
        );
    }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailsWithRouter></DetailsWithRouter>
        </ErrorBoundary>
    );
}
