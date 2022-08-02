class App extends React.Component{
    render(){
        const students = [
            {name: "Unnati",  marks: 10},
            {name: "Tejaswi", marks: 20},
            {name: "Sandeep", marks: 30},
            {name: "Kaustubh",marks: 40},
            {name: "Apurva",  marks: 45},
            {name: "Harika",  marks: 49}
          ];
      
        return <div><h2>Session 29, 2022</h2><ul> 
            <h2>Class Task</h2>
            <p>Return name which starts from vowels</p>
                {students.map((ele, idx) => {
                let firstlet = ele.name.charAt(0);         // Get the first letter of student Name
                    console.log(firstlet);                //Verifying result stored in variable
                
                let vow = ['A', 'O', 'U', 'E', 'I']; // Object (Array) of vowels

                if(vow.includes(firstlet) == true){ //comparing values if true print result
                    return <Marklist name={ele.name} marks={ele.marks} key={idx}/>
                }
            })}
        </ul>
        <State  />
        <Password />
        
        </div>;
    }
}