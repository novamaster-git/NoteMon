import React, {Component, Fragment} from 'react';
import Modal from './Components/Modal';
import './App.css';
import Header from './Components/Header'
import Search from './Components/Search';
import Button from './Components/Button';
import Cards from './Components/Cards';
import CreateNote from './Components/ModalComponents/CreateNote';
class App extends Component{
    userNoteData = [];
    state = {
        isOpen: false,
        title : "",
        note : "",
        wordsLength : 0,
        characterLength : 0,
        resultData : []
    }
    saveNote = () => {
        let jsonData = {title : this.state.title, note : this.state.note, wordsLength: this.state.wordsLength, characterLength: this.state.characterLength};
        this.userNoteData.push(JSON.stringify(jsonData));
        this.setState({resultData: this.userNoteData});
        // console.log(this.state.resultData);
    }
    change = () => (this.setState({isOpen: true}));
     changeNote = (event) => {
        let noteValue = event.target.value;
        let Result = noteValue.split(" ");
        this.setState({wordsLength: Result.length - 1})
        this.setState({characterLength: noteValue.length - 1})
        // setCharacterLength(noteValue.length)
    }
    deleteNoteHandler = (index) => {
        let person = [...this.state.resultData];
        console.log(index);
        person.splice(index, 1);
        this.userNoteData.splice(index, 1);
        this.setState({resultData: this.userNoteData});
    }
    render(){
        return(
            <Fragment>
                <Modal className="modal" isOpen={this.state.isOpen}> 
                    <CreateNote methods={[() => this.setState({isOpen: false}), (event) => (this.setState({title: event.target.value})), (event) => (this.setState({note : event.target.value})),this.changeNote, this.saveNote ]}/>
                </Modal>
                <Modal className="modal" isOpen={false}></Modal>
                <Header />
                <Search />
                <div className="buttonSector">
                <Button id="createNewNote" className="createNewNote" icon="plus" value="Create New Note" onClick={this.change}/>
                </div>
       
           { <div className="cardContainer">
                <Cards data={this.state.resultData} method={this.deleteNoteHandler}/>
            </div>}
            </Fragment>
        )
    }
}
export default App;