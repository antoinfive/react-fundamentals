var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle.js');
var PropTypes = React.PropTypes;
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  getInitialState: function(){
     return {
        isLoading: true,
        playersInfo: []
     }
  },
  componentDidMount: function(){
    // fetch github information from api
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then( function (players) {
        this.setState({
          isLoading: false,
         playersInfo: [players[0], players[1]] 
        });
      }.bind(this));
  },

  handleInitiateBattle: function(){
   this.context.router.push({
     pathname: '/results',
     state: {
       playersInfo: this.state.playersInfo
     }
   }); 
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />   );
  }
});

module.exports = ConfirmBattleContainer;

