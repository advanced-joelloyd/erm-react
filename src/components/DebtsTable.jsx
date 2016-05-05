
var React = require('react');

module.exports = React.createClass({

	render: function(){ 
		return (
			<table>
				<thead>
					<tr>
						<th>Reference</th>
						<th>Description</th>
						<th>Outstanding</th>
					</tr>
				</thead>
				<tbody>
					{this.props.items.data.map(function(item) {
						return <tr>
								<td>{item.ref}</td>
								<td>{item.description}</td>
								<td>£{item.outstandingDebt.toFixed(2)}</td>
							</tr>
					})}
				</tbody>
			</table>	
		)
	}
})
