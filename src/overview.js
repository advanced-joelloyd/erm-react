
// var config = require('./config.json');

var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, browserHistory, useRouterHistory } from "react-router";


var Debts = require('./components/DebtsTable.jsx');
var DebtOverview = require('./components/DebtOverview.jsx');

var items = {"data": [
				{ "ref": "A00001-0001", "outstandingDebt": 100.0, "description": "De Debt -V- Mr Jim Jones" },
				{ "ref": "A00001-0002", "outstandingDebt": 200.0, "description": "De Debt Coll -V- Miss Pam Evans" },
				{ "ref": "B00001-0013", "outstandingDebt": 3.0, "description": "De Debt -V- Mrs Denise Jackson" }
			]};

var App = React.createClass({
	render: function() {
		return (<div>
		<h1>Debts -- App Component</h1>
		<a href="overview.html">Overview</a>
		{this.props.children}
		</div>
		)
	}
});

ReactDOM.render(
	<DebtOverview/>, 
	document.getElementById('content'));

