import React from "react";

import Accordion from "react-bootstrap/Accordion";
function CommonQueries({ eventKey, question, answer }) {
  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body>{answer}</Accordion.Body>
      </Accordion.Item>
    </>
  );
}

export default CommonQueries;
