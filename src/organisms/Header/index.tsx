import Button from '../../atoms/Button'
import Logo from '../../molecules/Logo'
import Menu from '../../molecules/Menu'
import * as C from './styles'

const Header = () => {
  return (
    <header>
        <C.Box>
            <Logo />           
            <Menu />
            <Button />
        </C.Box>
    </header>
  )
}

export default Header