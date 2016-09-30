var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles')
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

function StartOver() {
  return (
   <div className="col-sm-12" style={styles.spaces}>
      <Link to='playerOne'>
        <button type='button' className='btn btn-lg btn-danger'> Start Over</button>
      </Link>
    </div>
  )
}

function Results (props) {
  if (props.isLoading) {
    return (
      <p> LOADING . . . </p>
    )
  }

  if (props.scores[0] === props.scores[1]){
    return (
      <MainContainer>
      <h1> It`s a tie! </h1>
        <StartOver />
      </MainContainer> 
    )
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0
 return (
  <MainContainer> 
    <h1> Results </h1>
    <div className="col-sm-8 col-sm-offset-2">
      <UserDetailsWrapper header="Winner">
        <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
      </UserDetailsWrapper>
     <UserDetailsWrapper header="Loser"> 
        <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
     </UserDetailsWrapper>
   </div>
     <StartOver />
   </MainContainer>
  ) 
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
