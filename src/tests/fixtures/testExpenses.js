import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Rent',
    note: 'December Rent',
    amount: 50000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '2',
    description: 'Car',
    note: 'Civic',
    amount: 50800,
    createdAt: moment(0).add(1,'days').valueOf()

}, {
    id: '3',
    description: 'Water Bill',
    note: '',
    amount: 3500,
    createdAt: moment(0).add(7, 'days').valueOf()
}];

export default expenses;
