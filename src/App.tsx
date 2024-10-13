import React, { useState } from 'react';
import AIIcon from './components/AIIcon';
import AIReplyModal from './components/AIReplyModal';
import './index.css';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="app-container">
      <AIIcon onClick={() => setShowModal(true)} />

      {showModal && (
        <AIReplyModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default App;
