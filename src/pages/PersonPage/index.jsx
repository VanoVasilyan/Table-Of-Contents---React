import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { Table, Button } from 'antd';
import columns from "../Accounts/columns";
import 'antd/dist/antd.min.css'

const PersonPage = () => {
    const { getUserById, loading } = useGlobalContext();
    const navigate = useNavigate()
    const { id } = useParams();
    const currentPerson = getUserById(id)
    const newColumns = [...columns.filter(item => item.title !== 'Action')]

    if (currentPerson) {
        return (
            <>
                <Table id="table" pagination={false} columns={newColumns} bordered={true} dataSource={[currentPerson]}></Table>
                <Button style={{ float: 'right' }} type="primary" onClick={() => navigate("/accounts")}>Back To List</Button>
            </>
        )
    }

    if (!loading) {
        return <Navigate to={"/accounts"} />
    }

    return <></>
}

export default PersonPage

