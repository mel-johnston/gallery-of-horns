import React from "react";
import Data from "./data";
import Header from './Components/Header';
import HornForm from "./Components/HornForm";
import Main from './Components/Main';
import Footer from './Components/Footer';
import "./App.css"
import SelectedBeast from "./Components/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
    }
  }

  handleOpenModal = (title, image, description) => {
    this.setState({
      showModal: true,
      selectedBeast: {
        title: title,
        image: image,
        description: description
      }
    }
    )
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }


  render() {
    return (
      <div>
        <Header />
        <HornForm />
        <Main
          handleOpenModal={this.handleOpenModal}
          data={Data}
        />
        <SelectedBeast
          showModal = {this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
