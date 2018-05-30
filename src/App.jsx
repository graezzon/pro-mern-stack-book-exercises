const contentNode = document.getElementById('contents');
const continents = ['Africa','America','Asia','Australia','Europe'];
const message = continents.map(c => `Hello ${c}!`).join(' ').split("\n");
const component = <p>{message}</p>;      // A simple JSX component
ReactDOM.render(component, contentNode);  // Render the component inside the content Node