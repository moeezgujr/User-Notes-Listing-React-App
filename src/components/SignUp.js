import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuidv4 } from "uuid";

const SignUp = () => {
  const history = useHistory();
  const regexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    if (!firstName) {
      alert("First Name Missing");
    } else if (!lastName) {
      alert("Last Name Missing");
    } else if (!dob) {
      alert("Date of Birth Missing");
    } else if (!phone) {
      alert("Phone no  Missing");
    } else if (!email) {
      alert("Email Missing");
    } else if (!regexp.test(email)) {
      alert("email format is not correct");
    } else if (!password) {
      alert("password is missing");
    } else {
      const token = uuidv4();
      const userForm = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: email,
        phone: phone,
        loginToken: token,
        password: password,
      };
      localStorage.setItem("User", JSON.stringify(userForm));
      alert("User Info Saved Successfully");
      history.push("/signin");
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <table>
        <tr>
          <td>First Name</td>
          <td>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              aria-label="FirstName"
              name="firstName"
            />
          </td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              aria-label="LastName"
              name="lastName"
            />
          </td>
        </tr>
        <tr>
          <td>DOB</td>
          <td>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              placeholder="Date of Birth"
              aria-label="dob"
              name="dob"
            />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              aria-label="Email"
              name="email"
            />
          </td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              aria-label="Phone"
              name="phone"
            />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              aria-label="password"
              name="password"
            />
          </td>
        </tr>
        <button className="button" onClick={onSubmit}>
          Submit
        </button>
      </table>
    </>
  );
};

export default SignUp;
