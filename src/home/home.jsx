import { useState, useEffect, use } from "react";
import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from "react-router-dom";
function Home() {
    const [studentdata, detstudent] = useState("")
    const[collegedata,setcollegedata]=useState("")
    

    useEffect(
        function () {
            const data = {
                name: "prashwitha",
                age: "12",
                collegeaddress:"Mapscollegemangalore",
                course:"bca",
                bloodgroup:"A+",
                Skills:"Good at SQL,python,data visualization,fast typing,predict modelling,Tools/database:excel,ETL tools,snow flake,hadoop",
                projects:"customer sigmentation analysis built a model using k means clustering improving targetting,COVID 19 data dash board created an interesting table",
                
                
            }
            const collegedata ={
                name:"Maps",
                phonenumber:"1234567890",
                

            }
          


            detstudent(data)
        },[]
    );

    return(
        <div>

            <p>name:{studentdata.name}</p>
            <p>age:{studentdata.age}</p>
            <p>collegeaddress:{studentdata.collegeaddress}</p>
            <p>course:{studentdata.course}</p>
            <p>bloodgroup:{studentdata.bloodgroup}</p>
            <p>Skills:{studentdata.Skills}</p>
            <p>projects:{studentdata.projects}</p>
        </div>
    );
}
export default Home;
