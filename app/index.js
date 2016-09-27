var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return ( 
      <div> They will never take me alive -kwz </div>
    )
  }
});

ReactDOM.render(<HelloWorld />,
  document.getElementById('app')
);


