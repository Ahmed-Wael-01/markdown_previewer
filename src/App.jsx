import { useEffect, useRef } from "react";
import {marked} from "marked"
import { setMarkdown } from "./store";
import { useDispatch, useSelector } from 'react-redux';

marked.setOptions({
  breaks: true // Converts single carriage returns into <br> tags
});

function Preview() {
  const markdown = useSelector((state) => state.markdown.markdown);
  const markeddown = marked.parse(markdown);
  return (
    <div  id="preview" dangerouslySetInnerHTML={{__html: markeddown}}></div>
  )
}

function Editor() {
  const elementRef = useRef(null);
  const initialText = "# Welcome to my React \n## This is a sub-heading... \n### And here's some other cool stuff: \nHeres some code, `<div></div>`, between 2 backticks. \n``` \n// this is multi-line code: \nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```') {\n return multiLineCode;\n } \n} \n``` \nYou can also make text **bold**... whoa! \nOr _italic_. \nOr... wait for it... **_both!_** \nAnd feel free to go crazy ~~crossing stuff out~~. \n\nThere's also [links](https://www.freecodecamp.org), and \n\n > Block Quotes! \n\nAnd if you want to get really crazy, even tables: \nWild Header | Crazy Header | Another Header? \n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here.... And here. | Okay. | I think we get it. \n- And of course there are lists. \n- Some are bulleted. \n- With different indentation levels. \n- That look like this.\n 1. And there are numbered lists too. \n1. Use just 1s if you want! \n1. And last but not least, let's not forget embedded images: \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) ";

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setMarkdown(e.target.value))
    //setMarkdown(e.target.value)
  }
  useEffect(()=> {
    if (elementRef.current) {
      console.log(elementRef.current.innerHTML)
    dispatch(setMarkdown(initialText));
    }
  })
  return (
    <div id="edit-window">
      <textarea ref={elementRef} defaultValue={initialText} id="editor" placeholder="Hello World"  onChange={handleChange}>
      </textarea>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Editor></Editor>
      <Preview
      id="preview-window"
      ></Preview>
    </div>
  )
}

export default App
