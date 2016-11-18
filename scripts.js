// var HelloMessage = React.createClass({
// 	render: function() {
// 		return <h1>Hello {this.props.message}</h1>;
// 	}
// });

// ReactDOM.render(<HelloMessage message="World" />, document.getElementById('root'));


var ToggleText = React.createClass({
	getInitialState: function() {
		return {
			showDefault: true
		}
	},

	toggle: function(e) {
		e.preventDefault();

		this.setState({ showDefault: |this.state.showDefault })
	},

	render: function() {
		var message = this.props.default;

		if (!this.state.showDefault) {
			message = this.props.alt;
		}

		return (
			<div>
				<h1>Hello {message}!</h1>
				<a href" onClick={this.toggle}>Toggle</a>
			</div>
		);
	}
});

ReactDOM.render(<ToggleText default="World" alt="Mars" />, document.getElementById('root'));