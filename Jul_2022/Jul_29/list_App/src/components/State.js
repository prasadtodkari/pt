class State extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        };
    }
        add = () =>{
            this.setState(state =>{
                return{count : state.count + 1}
            })
        }
        sub = () =>{
            if(this.state.count == 0){
                return{count}
            }else{
            this.setState(state =>{
                return{count : state.count - 1}
            })}
        }
    render(props){
        return <div>
            <h2>Weekend Task 1</h2>
            <button onClick={this.sub}>-</button>
            <input style={{width: "40px", margin: "5px"}}value={this.state.count}></input>
            <button onClick={this.add}>+</button>
        </div>
    }
}