import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateHabitForm } from './components/CreateHabitForm';
import { HabitList } from './components/HabitList'
import { useState } from 'react';
import { Modal } from './components/Modal';
import { CreateHabitButton } from './components/CreateHabitButton';
import { NavBar } from './components/NavBar';
import './App.css'



function App() {

  const [openModal, setOpenModal] = useState (false)

  return (
    <BrowserRouter>
      <div>
        <NavBar/> 
      </div>        

      <div className='Navigation'>
        <Routes>
          <Route path='/home' element={<HabitList />}/>
      

      
        </Routes>

        <CreateHabitButton 
          setOpenModal={setOpenModal}
        />

        {openModal && (
          <Modal>
            <CreateHabitForm/>
          </Modal>  
      )}
      </div>
      
    </BrowserRouter>
  )
}

export default App
