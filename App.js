 const parent = React.createElement("div", { id: "parent" }, [
        React.createElement(
          "div",
          { id: "child1" },
          React.createElement("h1", null, "Hello, World from React!")
        ),
        React.createElement(
          "div",
          { id: "child2" },
          React.createElement("h1", null, "Hello, World from React child2!")
        ),
      ]);
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);