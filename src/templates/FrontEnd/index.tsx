import Header from '../../organisms/Header'
import * as C from './styles'

type FrontendProps = {
    children: React.ReactNode
}

const Frontend = ({ children }: FrontendProps ) => {
  return (
    <C.Container>
        <Header></Header>
    </C.Container>
  )
}

export default Frontend