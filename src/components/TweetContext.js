import avatar from "../assets/carmen-sandiego.png";
import React from "react";
import moment from "moment";
export const TweetContext = React.createContext(null);

const date = moment().format("h:mm a - MMMM Do YYYY");

const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);
  return (
    <TweetContext.Provider
      value={{
        date: date,
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        numOfLikes: numOfLikes,
        numOfRetweets: numOfRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
export default TweetProvider;
