import { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(gender);
  };

  // const handleChange= (e)=>{
  //     setName(e.target.value);
  //     setEmail(e.target.value);
  //     setGender(e.target.value);
  // };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", margin: "50px", border: "1px solid" }}
      >
        <label style={{ margin: "15px" }}>Name :</label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />

        <label style={{ margin: "15px" }}>Email :</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <label>Gender :</label>

        <label style={{ margin: "15px" }}> Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />

        <label style={{ margin: "15px" }}>Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
export default Registration;
