import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>Amount - {numeral(amount / 100).format('$0,0.00')}</p>
        <p>Created At - {moment(createdAt).format('MMMM Do, YYYY')}</p>
        {note && <p>Note - {note}</p>}
    </div>
);

export default ExpenseListItem;

// Using connect in this manner will give us access to dispatch. Since we don't need access to state here we can just use connect
// to get access to what we need to which is the ability to dispatch.
