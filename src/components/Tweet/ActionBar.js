import React from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import { TweetContext } from "../TweetContext";
import ScaleIn from "../LikeButton/ScaleIn";

const ActionBar = () => {
  const {
    handleLike,
    handleRetweet,
    isRetweetedByCurrentUser,
  } = React.useContext(TweetContext);
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action color="rgb(23, 191, 99)" size={40} onClick={handleRetweet}>
        {isRetweetedByCurrentUser ? (
          <ScaleIn>
            <TweetActionIcon
              kind="retweet"
              color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            />
          </ScaleIn>
        ) : (
          <TweetActionIcon
            kind="retweet"
            color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
          />
        )}
      </Action>
      <Action color="rgb(224, 36, 94)" size={40} onClick={handleLike}>
        <LikeButton />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
