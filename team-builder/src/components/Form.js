import React from 'react';


const Form = props => {

    const onChange = (evt) => {

    }

    return (
        <div className="member-form">
            <form>
                <div className="member-labels">
                    <div>
                        <label>
                            Name
                            <input 
                                name = "name"
                                type = "text"
                                value = "name"
                                onChange = {onChange}
                                maxLength = "30"
                            ></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Email
                            <input 
                                name = "email"
                                type = "email"
                                value = "email"
                                onChange = {onChange}
                                maxLength = "30"
                            ></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Role
                            <select name="role" value="role" onChange={onChange}>
                                <option value="other">Other</option>
                                <option value="backend_engineer">Backend Engineer</option>
                                <option value="frontend_engineer">Frontend Engineer</option>
                                <option value="designer">Designer</option>
                                <option value="etc">Etc.</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <button>submit</button>
                </div>
                
            </form>
        </div>
    );
}
export default Form;