class Task extends React.Component{
    constructor(){
        super();
        this.state={
            task: '',
            test: [],
            class: 'pending'
        }
    }
    
    inputValueHandler = e => {
        this.setState({ task: e.target.value}) 
    }
     
    addList = () => {
        this.state.test.push(`${this.state.task}`);
    }

    toggleCheck = (e) => {
        if(e.target.checked == true){
          this.setState({class: "complete"});
        }else {
            this.setState({class: "pending"});
        }
      }

    render(){    
        
        return <>
            <h2 style={{padding: "10px"}}>Task of 1st Aug 2022</h2>
            <input type="text" placeholder="type your task here..." value={this.state.task} onChange={this.inputValueHandler}></ input>
            <button onClick={this.addList} className="btn">Submit</button>
            <ul>
                {this.state.test.map((val, idx)=>
                    <li className={this.state.class} key={idx}><input onChange={this.toggleCheck} type="checkbox"></input>{val}</li>
                )}
            </ul>
            
        </>
    }
}