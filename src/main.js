var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, 'Twitter'),
        React.createElement('a', {href: 'https://twitter.com/larsthorup'}, 'twitter.com/larsthorup')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Tumblr'),
        React.createElement('a', {href: 'http://larsthorup.tumblr.com'}, 'larsthorup.tumblr.com')
      )
    )
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));