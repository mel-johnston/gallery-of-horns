import React from "react";
import Data from "./data";
import Header from './Components/Header';
import HornForm from "./Components/HornForm";
import Main from './Components/Main';
import Footer from './Components/Footer';
import SelectedBeast from "./Components/SelectedBeast";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      data: Data,
      newData: Data,
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
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  handleFilter = (event) => {
    if (event.target.value === 'all') {
      this.setState({
        newData: this.state.data
      })
    } else {
      this.setState({
        newData: this.state.data.filter(obj => obj.horns === +event.target.value)
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <HornForm
          data={Data}
          handleFilter={this.handleFilter}
        />
        <Main
          handleOpenModal={this.handleOpenModal}
          data={this.state.newData}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
