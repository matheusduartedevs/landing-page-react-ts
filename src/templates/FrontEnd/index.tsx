import * as C from './styles'

type FrontendProps = {
    children: React.ReactNode
}

const Frontend = ({ children }: FrontendProps ) => {
  return (
    <C.Container>Frontend {children}</C.Container>
  )
}

export default Frontend