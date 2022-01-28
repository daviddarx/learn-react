const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {
            id: "app-container",
        },
        [
            React.createElement(
                "h1",
                {
                    id: "app-title",
                },
                "Adopt me"
            ),
            React.createElement(Pet, {
                name: "Luna",
                animal: "Dog",
                breed: "Havanese",
            }),
            React.createElement(Pet, {
                name: "Peeper",
                animal: "Bird",
                breed: "Cockatiel",
            }),
            React.createElement(Pet, {
                name: "Sudo",
                animal: "Dog",
                breed: "Wheaten Terrier",
            }),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
