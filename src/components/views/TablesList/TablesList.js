import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import Table from '../Table/Table';
import { tableData } from '../../../redux/tableRedux';

const TablesList = () => {

  const tables = useSelector(state => tableData(state));

  return(

    <ListGroup variant="flush">
        <ListGroup.Item>

        </ListGroup.Item>
    </ListGroup>
  )
}


export default TablesList;