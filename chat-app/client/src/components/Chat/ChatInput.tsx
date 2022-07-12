import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

interface ChatInputProps {
  handleChat(data: string): void;
}

export default function ChatInput(props: ChatInputProps) {
    const { handleChat } = props
  const [chatContent, setChatContent] = useState("");

  const sendChat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    handleChat(chatContent);
    setChatContent("");
  };

  return (
    <Row className="chat__inputContainer">
      <Col md={11}>
        <input
          className="chat__input"
          type="text"
          name="msg"
          id="msg"
          placeholder="Send message"
          value={chatContent}
          onChange={(e) => setChatContent(e.target.value)}
        />
      </Col>
      <Col md={1}>
        <div className="btn chat__sendBtn" onClick={(e) => sendChat(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </div>
      </Col>
    </Row>
  );
}