import React from 'react';


const MemberCard = props => {
    const {name, email, role, edit} = props;

    const onClick = evt => {
        edit(name, email, role);
    }

    return (
        <div className="memeber">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <button onClick={onClick}>Edit</button>
        </div>
    )
}

const MemberCards = props => {

    const {memebersList, memberEdit} = props;

    return (
        <div className="member-cards">
            {memebersList.map((member, i) => <MemberCard key={i} name={member.name} email={member.email} role={member.role} edit={memberEdit}/>)}
        </div>
    );
}
export default MemberCards;