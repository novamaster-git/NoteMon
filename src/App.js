import React, {Component, Fragment} from 'react';
import Modal from './Components/Modal';
import './App.css';
import Header from './Components/Header'
import Search from './Components/Search';
import Button from './Components/Button';
class App extends Component{
    render(){
        return(
            <Fragment>
                <Modal className="modal"> 
                    <h1>Soumen Samanta</h1>
                </Modal>
                <Header />
                <Search />
                <div className="buttonSector">
                <Button id="createNewNote" className="createNewNote" icon="plus" value="Create New Note"/>
                </div>
            </Fragment>
        )
    }
}
export default App;