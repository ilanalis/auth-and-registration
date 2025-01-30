import {useState} from "react";
import PropTypes from "prop-types";
import {toast} from "react-toastify";
import {login, signup} from "../../../../utils/api.js";


const FormComponent = ({action}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(action==='signup'){
            try {
                const response = await signup(name, email, password);
                if (!response.success) {
                    notify(response.message)
                }
            }catch(err) {
                notify('Oops.. something went wrong. Try again later.');
            }
        }else{
            try {
                const response = await login(email, password);
                if (!response.success) {
                    notify(response.message)
                }
            }catch (err){
                notify('Oops.. something went wrong. Try again later.');

            }
        }


    };

    const notify = (message) => toast(message);


    return (
        <form onSubmit={handleSubmit}>
            {action === 'signup' ? <div className="row mb-3 col-sm-12 justify-content-between">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-9">
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        value={name}
                        onChange={handleNameChange}
                        required={true}
                    />
                </div>
            </div> : null}
            <div className="row mb-3 col-sm-12 justify-content-between">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-9">
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        value={email}
                        onChange={handleEmailChange}
                        required={true}
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
                        required={true}
                    />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                {action === 'login'
                    ? <button type="submit" className="btn btn-primary w-25">Login</button>
                    : <button type="submit" className="btn btn-primary w-25">Sign up</button>
                }
            </div>
        </form>
    );
};

FormComponent.propTypes = {
    action: PropTypes.string
}
export default FormComponent;