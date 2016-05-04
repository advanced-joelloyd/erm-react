
var React = require('react');
var ReactDOM = require('react-dom');


var ItemTable = require('./components/ItemTable.jsx');

var items = {"data": [
				{ "description": "Pineapple" },
				{ "description": "Badger" }
			]};

ReactDOM.render(
	<ItemTable items={items} />, 
	document.getElementById('content'));

