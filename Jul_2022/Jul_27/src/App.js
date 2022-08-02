class App{
    static render(){
        let students = [ { name: "Unnati", marks: 10 }, { name: "Tejaswi", marks: 20 }, { name: "Sandeep", marks: 30 }, { name: "Kaustubh", marks: 40 },{ name: "Apurva", marks: 45 }, { name: "Harika", marks: 49 } ]

        students = students.filter(e => e.marks >= 30);
        
        
        console.log(students);
        return `${Heading.render()}`;
    }
}







// const colors = ["264653", "2A9D8F", "E9C46A", "F4A261", "E76F51"];
        // colors.forEach(col => {
        //     console.log(col)
        // })
        // let arra = [10, 22, 31, 45, 57, 66, 72];
        // arra = arra.map((num, idx) => num**idx)
        //         console.log(arra);