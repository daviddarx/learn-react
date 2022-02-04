import { Component } from "react";

// class component
class Carousel extends Component {
    state = {
        activeID: 0
    };

    static defaultProps = {
        // automatically default props, if something is missing in props
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"] // = props.images if not delivered from the parent
    };

    //arrow function to be able to access this
    thumbnailClick = (event) => {
        this.setState({
            activeID: +event.target.dataset.index // + to transform string in number
        });
    };

    render() {
        const { activeID } = this.state;
        const { images } = this.props; // != defaultProps, this one comes from the parent

        return (
            <div className="carousel">
                <img src={images[activeID]} alt="animal" />

                <div className="carousel-smaller">
                    {images.map((img, index) => (
                        // quick example, deactive eslint warning about click on non interactive element
                        // eslint-disable-next-line
                        <img
                            key={img}
                            src={img}
                            className={index === activeID ? "active" : ""}
                            data-index={index}
                            onClick={this.thumbnailClick}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
