'use strict';

const a = React.DOM.a;
const div = React.DOM.div;
const h1 = React.DOM.h1;
const h2 = React.DOM.h2;
const li = React.DOM.li;
const ul = React.DOM.ul;

var ProfileList = React.createClass({
  propTypes: {
    profiles: React.PropTypes.array.isRequired
  },

  render: function () {
    return ul({className: 'ProfileList'}, this.renderListItems(this.props.profiles));
  },

  renderListItems: function (profiles) {
    return profiles.map(profile => li({key: profile.key, className: 'ProfileListItem'}, React.createElement(Profile, profile)));
  }
});

var Profile = React.createClass({
  propTypes: {
    role: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  },

  render: function () {
    return div({className: 'Profile'},
      h2({className: 'Profile-role'}, this.props.role),
      a({href: this.props.url}, this.props.text)
    )
  }
});

var profiles = [
  {key: 'twitter', role: 'News', url: 'https://twitter.com/larsthorup', text: '@larsthorup'},
  {key: 'tumblr', role: 'Photos', url: 'http://larsthorup.tumblr.com', text: 'larsthorup.tumblr.com'},
];


var rootElement =
  div({},
    h1({}, 'Profiles'),
    React.createElement(ProfileList, {profiles: profiles})
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));