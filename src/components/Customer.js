import React from "react";
class Customer extends React.Component {
	render() {
		return (
			<div>
				<h2>이름 : {this.props.name}</h2>
				<h4>생일 : {this.props.birthday}</h4>
				<p>성별 : {this.props.gender}</p>
				<p>직업 : {this.props.job}</p>
			</div>
		);
	}
}

export default Customer; 