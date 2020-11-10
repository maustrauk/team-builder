import React from 'react';


const MemberCard = props => {
    const {name, email, role} = props;
    return (
        <div className="memeber">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}

const MemberCards = props => {

    const {memebersList} = props;

    return (
        <div className="member-cards">
            {memebersList.map(member => <MemberCard key={member.id} name={member.name} email={member.email} role={member.role}/>)}
        </div>
    );
}
export default MemberCards;