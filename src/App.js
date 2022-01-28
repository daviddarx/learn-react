const App = () => {
    return React.createElement(
        "div", 
        {
            id: "app-container"
        }, 
        React.createElement(
            "h1", 
            {
                id: "app-title"
            }, 
            "Adopt me"
        )
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));