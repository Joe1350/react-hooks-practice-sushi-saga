import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ allSushiList, onEatSushiClick }) {
  const [sushiCount, setSushiCount] = useState(0)

  const sushiToDisplay = allSushiList
    .slice(sushiCount, sushiCount + 4)
    .map(oneSushi => (
      <Sushi
        key={oneSushi.id}
        sushi={oneSushi}
        onEatSushiClick={onEatSushiClick}
      />
    ))

  function handleMoreClick() {
    setSushiCount(sushiCount + 4)
  }

  return (
    <div className="belt">
      {sushiToDisplay}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
