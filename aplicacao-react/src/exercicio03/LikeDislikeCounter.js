import React, { useState } from "react";

const LikeDislikeCounter = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
    setTotalClicks(totalClicks + 1);
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
    setTotalClicks(totalClicks + 1);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      <button onClick={handleDislikeClick}>Dislike</button>
      <p>
        Você clicou {likeCount} vezes no botão like e {dislikeCount} vezes no
        botão dislike.
      </p>
      <p>Total de cliques: {totalClicks}.</p>
    </div>
  );
};

export default LikeDislikeCounter;
