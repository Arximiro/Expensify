import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>Amount - {amount}</p>
        <p>Created At - {createdAt}</p>
        {note && <p>Note - {note}</p>}
    </div>
);

export default ExpenseListItem;

// Using connect in this manner will give us access to dispatch. Since we don't need access to state here we can just use connect
// to get access to what we need to which is the ability to dispatch.
