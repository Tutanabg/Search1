class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			num1: 1,
			num2: 1,
			score: 0,
			response: ""
};
}
	render(){
		if(this.state.score === 10){
			return(
			<div id="winner">You Won!!!</div>
);
}
		return(
		<div id="input">
		 <h1>{this.state.num1} + {this.state.num2}</h1>
		<input onKeyPress={this.answer} onChange={this.count}/>
		<div>Score: {this.state.score}</div>
		
		
</div>
);
}
count = (event) => {
	this.setState({
		response: event.target.value
	});
}

answer = (event) => {
	if(event.key === 'Enter'){
		const me = parseInt(this.state.response);
		if(me === this.state.num1 + this.state.num2){
			this.setState(state => ({
				score: state.score + 1,
				num1: Math.ceil(Math.random()*10),
				num2: Math.ceil(Math.random()*10),
				response: "",
				}));
				} else {
					this.setState(state => ({
						score: state.score - 1,
						response: "",
						}));
}
}
}
}
ReactDOM.render(<App />, document.querySelector('#me'));


