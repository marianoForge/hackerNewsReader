/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getStoryIDs } from "../services/hackerNewsAPI";
import { useInfiniteScroll } from "../helpers/useInfiniteScroll";
import Story from "./Story";

const Stories = () => {
  const { count } = useInfiniteScroll();
  const [storyIDs, setStoryIDs] = useState([]);

  useEffect(() => {
    getStoryIDs().then((data) => setStoryIDs(data));
  }, []);

  return (
    <React.Fragment>
      {storyIDs.slice(0, count).map((storyID) => {
        return <Story key={storyID} id={storyID} />;
      })}
    </React.Fragment>
  );
};

export default Stories;

/*<Story key={28833933} id={28833933} /> */
