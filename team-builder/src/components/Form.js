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
                    <div>
                        <label>
                            Name
                            <input 
                                name = "name"
                                type = "text"
                                value = {values.name}
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
                                value = {values.email}
                                onChange = {onChange}
                                maxLength = "30"
                            ></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Role
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
                    <button>submit</button>
                </div>
                
            </form>
        </div>
    );
}
export default Form;