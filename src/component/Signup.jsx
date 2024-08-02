import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Ensure this path is correct based on your project structure

function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
            navigate("/Login"); // Redirect to login page after successful signup
        } catch (error) {
            console.error("Error signing up:", error);
            setError(error.message);
        }
    };

    return (
        <form className="needs-validation" noValidate onSubmit={handleSubmitButton}>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustom01">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        placeholder="First name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustom02">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="validationCustom02"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustomUsername">Email</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend">
                                @
                            </span>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            id="validationCustomUsername"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="invalid-feedback">Please choose a valid email.</div>
                    </div>
                </div>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button className="btn btn-primary" type="submit">
                Submit form
            </button>
            <Link to="/Login">Sign In</Link>
        </form>
    );
}

export default Signup;
