import Frontend from "./templates/FrontEnd"
import * as C from './index'
import ButtonContact from "./atoms/ButtonContact"

const App = () => {
  return (
    <Frontend>
      <C.Container>
        <div>
          <h1>Design driven development of your web product</h1>
          <h6>
            We are a full service digital agency that builds immesive user experience.
          </h6>
          <ButtonContact />
        </div>

        <div>Coluna 2</div>
      </C.Container>
    </Frontend>
  )
}

export default App