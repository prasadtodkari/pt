class Password extends React.Component{
    constructor(){
        super();
        this.state={
            input: ''
        }
    }
    disp = (e) =>{
        this.setState(state=>{
            return {input:e.target.value}
        })
    }
    render(){
        return <div>
            <h2>Weekend Task 2</h2>
            <input type="password" onKeyUp={this.disp}/>
            <p>{this.state.input}</p>
        </div>
    }
}