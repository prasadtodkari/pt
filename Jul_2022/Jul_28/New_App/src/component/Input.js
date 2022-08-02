class Input extends React.Component {
    render(){
        return <input placeholder="type something"></input>
    }
}


class H2 extends React.Component {
    render(){
        return <h2>{this.props.name}{this.props.marks}</h2>
    }
}



class Para extends React.Component {
    render(){
        return <h2>{this.props.mark}</h2>
    }
}