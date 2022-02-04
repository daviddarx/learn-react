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

    async componentDidMount() {}

    render() {
        const { activeID } = this.state;
        const { images } = this.props; // != defaultProps, this one comes from the parent

        return (
            <div className="carousel">
                <img src={images[activeID]} alt="" />

                <div className="carousel-smaller">
                    {images.map((img, index) => (
                        <img
                            key={img}
                            src={img}
                            className={index === activeID ? "active" : ""}
                            alt="animal thumbnail"
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
