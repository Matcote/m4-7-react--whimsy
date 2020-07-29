import avatar from "../assets/carmen-sandiego.png";
import React from "react";
import moment from "moment";
export const TweetContext = React.createContext(null);

const date = moment().format("h:mm a - MMMM Do YYYY");

const TweetProvider = ({ children }) => {
  return (
    <TweetContext.Provider
      value={{
        date: date,
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: false,
        isLikedByCurrentUser: false,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
export default TweetProvider;
