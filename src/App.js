import GlobalStyle from './Global/GlobalStyle'
import {Container} from './AppStyles'
import {Header} from './AppStyles'
import {HeaderText} from './AppStyles'
import {Body} from './AppStyles'
import {items} from './data/items'
import {categories} from './data/categories'

const App = () =>{
  return(
    <>
    <GlobalStyle/>
    <Container>
        <Header>
          <HeaderText>Sistema Financeiro</HeaderText>
        </Header>
        <Body>

            {/* Area de info */}

            {/* Area de insert */}

            {/* Lista de itens */}

        </Body>
    </Container>
    </>

  )
}
export default App;