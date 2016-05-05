var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
   render: function() {
       return (
           <div>
           <h1>TEST</h1>
           <Link to="/">Home</Link>
           </div>
       );
   } 
});