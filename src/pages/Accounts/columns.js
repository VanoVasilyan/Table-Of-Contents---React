import { Link } from 'react-router-dom'
import { Button } from 'antd';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Created On',
        dataIndex: 'createdOn',
        key: 'createdOn',
    },
    {
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner'
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, { action }) => {
            return <Link to={`/accounts/${action}`}><Button type="primary">View</Button></Link>
        }
    }
];

export default columns