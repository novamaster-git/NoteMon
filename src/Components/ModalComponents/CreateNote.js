import React, {Fragment, useState} from 'react';
import Button from '../Button';
import '../../App.css';
const CreateNote = (props) => {
    const [word, setWord] = useState(0);
    const [character, setCharacter] = useState(0);
const change = (event) => {
    let textValue = event.target.value;
    let results = textValue.split(" ");
    setWord(results.length - 1);
    setCharacter(textValue.length - 1);
    props.methods[3](event);
}
const closeIt = (event) => {
    props.methods[4]();
    props.methods[0]();
    console.log("Working")
}
    return(
        <Fragment>
            <h1 className="createHeading">Create A New Note</h1>
            <div className='create-note'>
                <input type="text" name="heading" id="heading" placeholder="Note Heading" onBlur={props.methods[1]} className="headingBox"/>
                <textarea name="noteText" id="noteText" onChange={change} className="note-text" onBlur={props.methods[2]} placeholder="Enter the note here"></textarea>
                <div className="score-box">
                    <h4>Words : {word}</h4>
                    <h4>Characters : {character}</h4>
                </div>
                <div className="button-box">
                <Button id="createNewNote" className="close" icon="cross" onClick={props.methods[0]} value="Close"/>
                <Button id="createNewNote" className="create" icon="plus" onClick={closeIt} value="Save"/>
                </div>
            </div>

        </Fragment>
    )
}
export default CreateNote;