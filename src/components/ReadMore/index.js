// Write your code here
import {useState} from 'react'
import {
  Container,
  MainContainer,
  HeadName,
  SingleLine,
  ImageContainer,
  ReadButton,
  TextContainer,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [buttonText, setButtonText] = useState(false)
  const onChangeButtonText = () => {
    setButtonText(prevState => !prevState)
  }

  return (
    <Container>
      <MainContainer>
        <TextContainer>
          <HeadName>React Hooks</HeadName>
          <SingleLine>Hooks are a new addition to React</SingleLine>
          <ImageContainer
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <SingleLine>
            {buttonText
              ? reactHooksDescription
              : reactHooksDescription.slice(0, 170)}
          </SingleLine>
          <ReadButton onClick={onChangeButtonText}>
            {buttonText ? 'Read Less' : 'Read More'}
          </ReadButton>
        </TextContainer>
      </MainContainer>
    </Container>
  )
}
export default ReadMore
