import { useGlobalContext } from '../../context'
import { Table } from 'antd';
import columns from './columns';
import 'antd/dist/antd.min.css'
import './Accounts.css'

const Accounts = () => {
    const { data } = useGlobalContext();
    return <Table pagination={false} bordered={true} columns={columns} dataSource={data} />
}

export default Accounts
