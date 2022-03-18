import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { Table, Button } from 'antd';
import 'antd/dist/antd.min.css'
import columns from "../Accounts/columns";

const PersonPage = () => {
    const { getUserById } = useGlobalContext();
    const navigate = useNavigate()
    const { id } = useParams();
    const currentPerson = getUserById(id)

    const newColumns = [...columns.filter(item => item.title !== 'Action')]

    if (currentPerson) {
        return (
            <>
                <Table id="table" pagination={false} columns={newColumns} bordered={true} dataSource={[currentPerson]}></Table>
                <Button style={{float: 'right'}}  type="primary" onClick={() => navigate("/accounts")}>Back To List</Button>
            </>
        )
    }

    return <Navigate to={"/accounts"} />
}

export default PersonPage
