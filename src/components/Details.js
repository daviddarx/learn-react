import { Component } from "react";
import { withRouter } from "react-router-dom";

// class component
class Details extends Component {
    //class property, replaces the hooks in class componenets
    state = { loading: true };

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
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}` // //match.params = syntax to get the ID from the route (withRouter)
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

    render() {
        if (this.state.loading) {
            return <h2>Loading...</h2>;
        }

        const { animal, breed, city, state, description, name } = this.state;

        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>

                    <h2>
                        {animal} - {breed} - {city}, {state}
                    </h2>

                    <p>{description}</p>

                    <button>Adopt {name}</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Details);
