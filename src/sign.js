import React, { useState } from "react";

const Sign = () => {
    const [fname, setfname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [msgerror, setmsgerror] = useState("");
    const [iserror, setiserror] = useState(true);

    const handlFname = (event) => {
        setfname(event.target.value);
    };
    const handlemail = (event) => {
        setemail(event.target.value);
    };
    const handlpassword = (event) => {
        setpassword(event.target.value);
    };
    const handlcpassword = (event) => {
        setcpassword(event.target.value);
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        if (fname === "" || email === "" || password === "" || cpassword === "") {
            setmsgerror("Error: all fields are mandatory");
        } else if (password !== cpassword) {
            setmsgerror("password and confirm password doesn't match");
        } else {
            setiserror(false);
            setmsgerror("succesfully signed up");
        }
    };

    return (
        <div className="hh">
            <form className="container" onSubmit={handlesubmit}>
                <div className="header">
                    <h1>Signup</h1>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        id="usernameInput"
                        placeholder="enter your name"
                        onChange={handlFname}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        onChange={handlemail}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        onChange={handlpassword}
                    />
                </div>
                <div>
                    {/* <h3>Confirm Password</h3> */}
                    <input
                        type="password"
                        name="confirmpassword"
                        placeholder="confirm your password"
                        onChange={handlcpassword}
                    />
                </div>
                {iserror === true ? (
                    <p style={{ color: "red" }}>{msgerror}</p>
                ) : (
                    <p style={{ color: "green" }}>{msgerror}</p>
                )}
                <button type="submit" id="btn">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Sign;
