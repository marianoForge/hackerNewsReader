import axios from "axios";

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
export const newStories = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;

export const getStory = async (storyID) => {
  const response = await axios
    .get(`${storyURL + storyID}.json`)
    .then(({ data }) => data);

  return response;
};

export const getStoryIDs = async () => {
  const response = await axios.get(newStories).then(({ data }) => data);

  return response;
};
