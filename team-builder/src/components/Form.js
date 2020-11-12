import React from 'react';


const Form = props => {

    const {values, update, submit} = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <div className="member-form" onSubmit={onSubmit}>
            <form>
                <div className="member-labels">
                    <div className="member-label">
                        <label>
                            Name
                            <br></br>
                            <input 
                                name = "name"
                                type = "text"
                                value = {values.name}
                                onChange = {onChange}
                                maxLength = "30"
                            ></input>
                        </label>
                    </div>
                    <div className="member-label">
                        <label>
                            Email
                            <br></br>
                            <input 
                                name = "email"
                                type = "email"
                                value = {values.email}
                                onChange = {onChange}
                                maxLength = "30"
                            ></input>
                        </label>
                    </div>
                    <div className="member-label">
                        <label>
                            Role
                            <br></br>
                            <select name="role" value={values.role} onChange={onChange}>
                                <option value="other">Other</option>
                                <option value="backend_engineer">Backend Engineer</option>
                                <option value="frontend_engineer">Frontend Engineer</option>
                                <option value="designer">Designer</option>
                                <option value="etc">Etc.</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className ="submit">
                    <button>Submit</button>
                </div>
                
            </form>
        </div>
    );
}
export default Form;