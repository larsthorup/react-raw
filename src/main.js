var Profile = React.createClass({
  propTypes: {
    role: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },

  render: function () {
    return React.createElement('li', {className: 'Profile'},
      React.createElement('h2', {className: 'Profile-role'}, this.props.role),
      React.createElement('a', {href: this.props.url}, this.props.text)
    )
  }
});

var profiles = [
  {key: 'twitter', role: 'News', url: 'https://twitter.com/larsthorup', text: '@larsthorup'},
  {key: 'tumblr', role: 'Photos', url: 'http://larsthorup.tumblr.com', text: 'larsthorup.tumblr.com'},
];


var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Profiles'),
    React.createElement('ul', {},
      profiles.map(profile => React.createElement(Profile, profile))
    )
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));