
var React = require('react');
var ReactDOM = require('react-dom');


var Debts = require('./components/DebtsTable.jsx');

var items = {"data": [
				{ "ref": "A00001-0001", "outstandingDebt": 100.0, "description": "De Debt -V- Mr Jim Jones" },
				{ "ref": "A00001-0002", "outstandingDebt": 200.0, "description": "De Debt Coll -V- Miss Pam Evans" },
				{ "ref": "B00001-0013", "outstandingDebt": 3.0, "description": "De Debt -V- Mrs Denise Jackson" }
			]};

ReactDOM.render(
	<Debts items={items} />, 
	document.getElementById('content'));

