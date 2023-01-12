import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        {this.props.data.map((hornedBeast, index) => {
          return (
            <HornedBeast
              title={hornedBeast.title}
              image={hornedBeast.image_url}
              description={hornedBeast.description}
              keyword={hornedBeast.keyword}
              horns={hornedBeast.horns}
              key={index}
              handleOpenModal={this.props.handleOpenModal}
            />
          )
        })}
      </div>
    )
  }
}

export default Main;