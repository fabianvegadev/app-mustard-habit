import './CreateHabitForm.css';
import { useState } from 'react';

function CreateHabitForm () {

    const [createValue, setCreateValue] = useState('');

    console.log(createValue)

    return (
            <form>
                <label>Escribe tu nuevo hábito</label>
                <textarea 
                    placeholder="Correr 30 minutos antes de empezar el día"
                    value={createValue}
                    onChange={ (e) => setCreateValue (e.target.value)}
                />
                <div className="HabitForm-buttonContainer">
                    <button 
                        type=''
                        className="HabitForm-button HabitForm-button--cancel">
                        Cancelar
                    </button >
                    <button 
                    type='submit'
                        className="HabitForm-button HabitForm-button--add">
                        Añadir
                    </button>
                </div>
            </form>
    )
}

export {CreateHabitForm};