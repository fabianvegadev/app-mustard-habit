# MustardHabit <img src="./src/NavBar/LogoMustardHabit.png"> 

MustardHabit es una aplicación web desarrollada con **React** para el control de hábitos diarios. Con esta aplicación, los usuarios pueden crear, seguir y registrar sus hábitos a lo largo del tiempo, ayudando a fomentar la consistencia y la mejora personal.

## Características

- **Agregar hábitos**: Permite agregar nuevos hábitos que deseas seguir.
- **Seguimiento diario**: Registra si has cumplido con tus hábitos cada día.
- **Reinicio automático diario**: Los hábitos se reinician automáticamente cada día.
- **Historial de logros**: Lleva un registro de los días en los que se completaron todos los hábitos.
- **Interfaz intuitiva**: Una barra de fechas fácil de usar para navegar entre los días de la semana.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la creación de la interfaz de usuario.
- **CSS**: Para la personalización del diseño y efectos visuales.
- **React Icons**: Biblioteca de iconos utilizados en la aplicación.
- **React Calendar**: Biblioteca para implementar un calendario que mostrará todos los logros.

## Uso

- **Crear un hábito**: Haz clic en el botón "+" para agregar un nuevo hábito.
- **Marcar un hábito como completado**: Marca el hábito una vez que lo hayas cumplido ese día.
- **Seguimiento de días anteriores**: Usa las flechas para navegar entre los días de la semana y ver el progreso anterior.
- **Visualización de logros**: Un icono de verificación aparecerá en los días en los que todos los hábitos fueron completados.

## Estructura del proyecto

- mustard-habit-project-talento/
- ├── public/
- ├── src/
- │   ├── Animacion/                 # Componete de animacion que se usa en el fondo de la aplicacion.
- │   │   ├──Animacion.css   
- │   │   ├──Animacion.jsx
- │   │   ├──ContainerAnimaciones.jsx
- │   ├── App/                       # Componente principal de la aplicacion.
- │   │   ├──App.css   
- │   │   ├──App.jsx
- │   ├── CreateHabitButton/         # Componente del botón para agregar nuevo habitos.   
- │   │   ├──CreateHabitButton.css   
- │   │   ├──CreateHabitButton.jsx
- │   ├── CreateHabitForm/           # Componente del formulario para crear nuevos hábitos.
- │   │   ├──CreateHabitForm.css
- │   │   ├──CreateHabitForm.jsx
- │   ├── DateBar/                   # Componente del barra que contiene todas las fechas y el registro de logros en la homepage.
- │   │   ├──DateBar.css
- │   │   ├──DateBar.jsx
- │   ├── EmptyHabits/               # Componente usado para mostrar el mensaje "Crea tu primer habito" cuando el usuario es nuevo.
- │   │   ├──EmptyHabits.css
- │   │   ├──EmptyHabits.jsx
- │   ├── HabitCalendar/             # Componente usado para mostrar un registro de los hábitos en forma de calendario (En desarrollo).
- │   │   ├──HabitCalendar.css   
- │   │   ├──HabitCalendar.jsx
- │   ├── HabitItem/                 # Componente para cada item que contiene la informacion del hábito.
- │   │   ├──fondoIsEditing.png
- │   │   ├──HabitItem.css   
- │   │   ├──HabitItem.jsx
- │   ├── HabitList/                 # Componente que contiene la lista de habitos a seguir.
- │   │   ├──HabitList.css   
- │   │   ├──HabitList.jsx
- │   ├── HomePage/                  # Este componente contiene todo lo relacionado a la pagina principal.
- │   │   ├──HomePage.css   
- │   │   ├──HomePage.jsx
- │   ├── Modal/                     # Componete creado para el uso de React portals.
- │   │   ├──Modal.css
- │   │   ├──Modal.jsx
- │   ├── NavBar/                    # Componente para la barra de navegacion que permanece fija en la parte superior
- │   │   ├──LogoMustardHabit.png
- │   │   ├──NavBar.css
- │   │   ├──NavBar.jsx
- │   ├── fondo.png                  # Imagen usada en el fondo de toda la app
- │   ├── index.css                  # Archivo css del root
- │   ├── main.jsx                   # Archivo principal donde se plasma la app
- ├── index.html                     # Archivo html principal
- ├── package-lock.json
- ├── package.json
- └── README.md
