/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsAPI";
import { ListGroup } from "react-bootstrap";
import { timeMap } from "../helpers/timeMap";

const Story = ({ id }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(id).then((data) => data && data.url && setStory(data));
  }, []);

  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <a href={story.url}>{story.title}</a>
          </div>
          {story.score} points - by: {story.by} - posted: {timeMap(story.time)}{" "}
          ago.
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Story;
