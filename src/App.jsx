import './index.css';

import { useState } from 'react';

import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className='App'>
      <Button onClick={() => setOpen(true)}>🗔 Open window</Button>

      <Modal open={open} setOpen={setOpen}>
        <img src='https://images.unsplash.com/photo-1620418885516-68d8c2b2f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVpcHppZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        <h3>LEIPZIG</h3>
      </Modal>
    </div>
  );
}

export default App;
