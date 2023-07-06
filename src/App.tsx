import Frontend from "./templates/FrontEnd"
import * as C from './styles'
import ButtonContact from "./atoms/ButtonContact"
import HeroImage from './assets/HeroImage.svg'

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

        <C.ColumnImage>
          <img src={HeroImage} alt="Hero header image" />
        </C.ColumnImage>
      </C.Container>
    </Frontend>
  )
}

export default App