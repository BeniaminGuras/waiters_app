import { Container } from "react-bootstrap";
import Title from "../Title/Title"
import TablesList from "../TablesList/TablesList";


const MainMenu = () => {

  return(
    <Container>
      <Title>All tables</Title>
      <TablesList /> 
    </Container>
  )
}

export default MainMenu;