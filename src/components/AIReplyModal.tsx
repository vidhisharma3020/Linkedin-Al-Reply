import React from 'react';

interface AIReplyModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const AIReplyModal: React.FC<AIReplyModalProps> = ({ setShowModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">AI Reply Generator</h2>
        <input
          type="text"
          placeholder="Enter your command..."
          className="modal-input"
        />
        <div className="modal-buttons">
          <button className="generate-button">Generate</button>
          <button className="close-button" onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};


export default AIReplyModal;
