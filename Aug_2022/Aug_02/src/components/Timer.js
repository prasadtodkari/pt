class Timer extends React.Component {
    constructor() {
        super();
        this.state = {counter: 0, interval_id: 0};
      }
    
    startTimer = e => {
        const id = setInterval(e => this.increase(), 1000);
        this.setState({interval_id: id});
    }
      
    stopTimer = e => {
        clearInterval(this.state.interval_id);
    } 
    
    resetTimer = e => {
        clearInterval(this.state.interval_id);
        this.setState(current => {return {coutner: current.counter = 0}});
        this.setState({interval_id: 0});
    } 
    

    increase = _ => {
        this.setState(current => {
        return {counter: current.counter + 1};
        });
    }
    
    render() {
        return <>
            <h4>Create Timer with start and stop Function</h4>
            <h1>{this.state.counter}</h1>
            <button className="start" onClick={this.startTimer}>Start</button>
            <button className="" onClick={this.stopTimer}>Pause</button>
            <button className="reset" onClick={this.resetTimer}>Reset</button>
        </>
        }
    }