import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    course: "",
    education: "",
  });
  console.log("data", data);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8070")
      .then((res) => console.log("result", res))
      .catch((err) => console.log("error", err));
  };

  return (
    <>
      <div className="d-flex justify-content-center align-item-center bg-primary vh-100">
        <div className="w-50 h-50 bg-white rounded p-5 m-10">
          <h2>Registration Form</h2>
          <form action="" className="form">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              placeholder="Enter you Name"
              onChange={(e) => setData({ name: e.target.value })}
            />
            <br />
            <label htmlFor="">Age:</label>
            <input
              type="number"
              name=""
              id=""
              onChange={(e) => setData({ age: e.target.value })}
            />
            <br />
            <label htmlFor="">Email:</label>
            <input
              type="text"
              placeholder="Enter you email"
              onChange={(e) => setData({ email: e.target.value })}
            />
            <br />
            <label htmlFor="">Phone Number:</label>
            <input
              type="number"
              name=""
              id=""
              onChange={(e) => setData({ phone: e.target.value })}
            />
            <br />
            <label htmlFor="">Course:</label>
            <input type="radio" name="course" value="CSS" label="CSS" />
            <input type="radio" name="course" value="HTML" />
            <input
              type="radio"
              name="course"
              value="JAVA"
              onChange={(e) => setData({ course: e.target.value })}
            />

            <br />
            <label htmlFor="">Educational Background:</label>
            <select
              name="background"
              id="background"
              onChange={(e) => setData({ education: e.target.value })}
            >
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BBA">BBA</option>
              <option value="BA">BA</option>
            </select>
            <br />
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
