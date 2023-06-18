import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './index.css'
import {
  Heading,
  ImageElement,
  Image,
  EditorContainer,
  ButtonsContainer,
  Button,
  HrLine,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isTextBold: false,
    isTextItalic: false,
    isTextUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({isTextBold: !prevState.isTextBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isTextItalic: !prevState.isTextItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isTextUnderline: !prevState.isTextUnderline}))
  }

  render() {
    const {isTextBold, isTextItalic, isTextUnderline} = this.state
    const buttonColor = isTextBold ? ' #faff00' : '#f1f5f9'
    const italicButtonColor = isTextItalic ? ' #faff00' : '#f1f5f9'
    const underlineButtonColor = isTextUnderline ? ' #faff00' : '#f1f5f9'
    const fontWeight = isTextBold ? 'bold' : 'normal'
    const fontStyle = isTextItalic ? 'italic' : 'normal'
    const textDecoration = isTextUnderline ? 'underline' : 'normal'

    return (
      <div className="background-container">
        <div className="responsive-container">
          <div className="image-container">
            <div>
              <Heading>Text Editor</Heading>
              <ImageElement>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  alt="text editor"
                />
              </ImageElement>
            </div>
            <EditorContainer>
              <ButtonsContainer>
                <li>
                  <Button
                    data-testid="bold"
                    color={buttonColor}
                    type="button"
                    onClick={this.onClickBold}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>
                <li>
                  <Button
                    className="button"
                    data-testid="italic"
                    type="button"
                    color={italicButtonColor}
                    onClick={this.onClickItalic}
                  >
                    <GoItalic size={25} />
                  </Button>
                </li>
                <li>
                  <Button
                    className="button"
                    data-testid="underline"
                    type="button"
                    color={underlineButtonColor}
                    onClick={this.onClickUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </Button>
                </li>
              </ButtonsContainer>
              <HrLine />
              <TextArea
                rows={20}
                cols={45}
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </EditorContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
