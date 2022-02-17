import { useState, useEffect } from 'react'
import GlobalStyle from './Global/GlobalStyle'
import {Container} from './AppStyles'
import {Header} from './AppStyles'
import {HeaderText} from './AppStyles'
import {Body} from './AppStyles'
import {items} from './data/items'
import {categories} from './data/categories'
import { getCurrentMonth } from './helpers/dateFilter'
import { filterListByMonth } from './helpers/dateFilter'

const App = () =>{
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(()=>{
      setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])
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