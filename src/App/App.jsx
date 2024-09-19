import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateHabitForm } from '../CreateHabitForm/CreateHabitForm';
import { HabitList } from '../HabitList/HabitList'
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CreateHabitButton } from '../CreateHabitButton/CreateHabitButton';
import { NavBar } from '../NavBar/NavBar';
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
