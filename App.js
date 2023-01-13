const heading = React.createElement('h1', {}, 'Namaste Everyone!');
const message = React.createElement('p', {}, 'Hello World! This is my first assignment');
const container = React.createElement('div', { id: 'container' }, [heading, message]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);