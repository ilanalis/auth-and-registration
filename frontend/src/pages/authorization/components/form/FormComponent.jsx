import {useState} from "react";
import PropTypes from "prop-types";


const FormComponent = ({action}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mb-3 col-sm-12 justify-content-between">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-9">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
            </div>
            <div className="row mb-3 col-sm-12 justify-content-between">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mb-3">Password</label>
                <div className="col-sm-9">
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword3"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                {action === 'login'
                    ? <button type="submit" className="btn btn-primary">Login</button>
                    : <button type="submit" className="btn btn-primary">Sign up</button>
                }
            </div>
        </form>
    );
};

FormComponent.propTypes = {
    action: PropTypes.string
}
export default FormComponent;