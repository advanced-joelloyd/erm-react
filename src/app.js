
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;


var Debts = require('./components/DebtsTable.jsx');
var DebtOverview = require('./components/DebtOverview.jsx');

var items = {"data": [
				{ "ref": "A00001-0001", "outstandingDebt": 100.0, "description": "De Debt -V- Mr Jim Jones" },
				{ "ref": "A00001-0002", "outstandingDebt": 200.0, "description": "De Debt Coll -V- Miss Pam Evans" },
				{ "ref": "B00001-0013", "outstandingDebt": 3.0, "description": "De Debt -V- Mrs Denise Jackson" }
			]};


var DebtsWrapper = React.createClass({
	render: function() {
		return <Debts items={items} />
	}
});

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={DebtsWrapper} />
		<Route path="/overview/:reference" component={DebtOverview} />
	</Router>), 
	document.getElementById('content'));

