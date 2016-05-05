
var React = require('react');
var Link = require('react-router').Link;

var Row = React.createClass({
	render: function () {
		var item = this.props.item;
		return <tr key={item.ref} >
								<td>{item.ref}</td>
								<td>{item.description}</td>
								<td>£{item.outstandingDebt.toFixed(2)}</td>
								<td><Link to={ `/overview/${item.ref}` }>Details</Link></td>
							</tr>
	}
});

module.exports = React.createClass({
	render: function(){ 
		return (
			<table>
				<thead>
					<tr>
						<th>Reference</th>
						<th>Description</th>
						<th>Outstanding</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{this.props.items.data.map(function(item) {
						return <Row key={item.ref} item={item} />
					})}					
				</tbody>
			</table>	
		)
	}
})
