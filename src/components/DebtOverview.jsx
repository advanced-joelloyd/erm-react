var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
   render: function() {
       console.log(this.props);
       return (
           <div>
           <h1>{this.props.routeParams.reference}</h1>
           <Link to="/">Home</Link>
           </div>
       );
   } 
});