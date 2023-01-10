import React from "react";
import HornedBeast from "./HornedBeast";
import Data from '../data.js'

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        {Data.map((hornedBeast) => {
          return (
          <HornedBeast name={hornedBeast.name}
          image={hornedBeast.image_url}
          title={hornedBeast.title}
          description={hornedBeast.description}
          keyword={hornedBeast.keyword}
          horns={hornedBeast.horns} />)
        })}
      </div>
    )
  }
}


export default Main;