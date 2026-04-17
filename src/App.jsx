import { useState, useEffect } from "react";

function App() {
  const [studentdata, setStudent] = useState({});
  const [collegedata, setCollege] = useState({});

  useEffect(() => {
    const data = {
      name: "prashwitha",
      age: "12",
      collegeaddress: "Maps College Mangalore",
      course: "BCA",
      bloodgroup: "A+",
      Skills:
        "Good at SQL, Python, Data Visualization, Fast Typing, Predictive Modelling, Tools/Database: Excel, ETL tools, Snowflake, Hadoop",
      projects:
        "Customer segmentation analysis using K-means clustering, COVID-19 data dashboard",
    };

    const college = {
      name: "Maps",
      phonenumber: "1234567890",
    };

    setStudent(data);
    setCollege(college);
  }, []);

  return (
    <div>
      <h2>Student Details</h2>

      <p>Name: {studentdata.name}</p>
      <p>Age: {studentdata.age}</p>
      <p>College Address: {studentdata.collegeaddress}</p>
      <p>Course: {studentdata.course}</p>
      <p>Blood Group: {studentdata.bloodgroup}</p>
      <p>Skills: {studentdata.Skills}</p>
      <p>Projects: {studentdata.projects}</p>

      <h2>College Details</h2>
      <p>College Name: {collegedata.name}</p>
      <p>Phone Number: {collegedata.phonenumber}</p>
    </div>
  );
}

export default App;