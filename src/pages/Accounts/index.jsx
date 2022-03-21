import { useGlobalContext } from '../../context'
import { Table } from 'antd';
import columns from './columns';
import 'antd/dist/antd.min.css'
import './Accounts.css'
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Accounts = () => {
    const { data, loading } = useGlobalContext();
    const antIcon = <LoadingOutlined style={{ fontSize: 50, position:'relative',  }} spin />;

    return <>
        {loading && <Spin indicator={antIcon} style={{ position: 'absolute', left: '50%', top: '30%', zIndex: '10' }}/>}
        <Table pagination={false} bordered={true} columns={columns} dataSource={data} />
    </>
}

export default Accounts
