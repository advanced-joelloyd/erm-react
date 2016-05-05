
var React = require('react');
var Link = require('react-router').Link;

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
					{/*this.props.items.data.map(function(item) {
						return <tr key={item.ref}>
								<td>{item.ref}</td>
								<td>{item.description}</td>
								<td>£{item.outstandingDebt.toFixed(2)}</td>
							</tr>
					})*/}
					<tr><td><Link to="overview">Hi Mum</Link></td><td></td><td></td></tr>
				</tbody>
			</table>	
		)
	}
})
