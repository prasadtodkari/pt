class Style extends React.Component{
    constructor(){
        super();

        this.state= {
            theme : 'light'
        }
    }
    light = () =>{
        this.setState(_ => {return { theme: "light"}});
    }
    dark = () =>{
        this.setState(_ => {return { theme: "dark"}});
    }
    render(){
        return <div>
            <button onClick={this.light}>Light Mode</button>
            &nbsp;
            <button onClick={this.dark}>Dark Mode</button>
            <div className={this.state.theme == "light" ? "light" : "dark"}>
                <h2>Lorem epsom</h2>
                <p> adfjadfhadfpajdfuhaoifmapojdfianm adfnadfnoiadf</p>
            </div>
        </div>
    }
}