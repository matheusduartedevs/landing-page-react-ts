import Header from '../../organisms/Header'
import * as C from './styles'

type FrontendProps = {
    children: React.ReactNode
}

const Frontend = ({ children }: FrontendProps ) => {
  return (
    <C.Container>
        <Header></Header>

        <main>{children}</main>
    </C.Container>
  )
}

export default Frontend