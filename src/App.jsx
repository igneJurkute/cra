import logo from './img/logo.svg';
import './App.css';
import { Aside } from './components/aside/Aside';
import { Header} from './components/header/Header';
import { Main } from './components/main/Main';

function App() {
  const users = [
    {
      id: 1,
      name: 'Andrea',
      img: 'f5ags41f5f.png',
    },
    {
      id: 2,
      name: 'Karen',
      img: 'rt58yh45gf.png'
    },
    {
      id: 3,
      name: 'Steve',
      img: '48jhg56f25.png',
    },
  ];

  const data = [
    {
      id: 1,
      userId: 4,
      stage: 'review',
      tag: 'HTML',
      task: 'Home page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
      events: [
        {
          date: 1650532562551,
          type: 'fileUpload',
          userId: 1,
        },
      ],
    },
    {
      id: 2,
      userId: 2,
      stage: 'done',
      tag: 'CSS',
      task: 'Responsive design',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 3,
      userId: 3,
      stage: 'done',
      tag: 'HTML',
      task: '404 page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 4,
      userId: 1,
      stage: 'progress',
      tag: 'CSS',
      task: 'Basic style css file',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 5,
      userId: 2,
      stage: 'progress',
      tag: 'JS',
      task: 'Clock js',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 6,
      userId: 3,
      stage: 'review',
      tag: 'CSS',
      task: 'Clock CSS',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 7,
      userId: 1,
      stage: 'progress',
      tag: 'HTML',
      task: 'About us page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 8,
      userId: 2,
      stage: 'review',
      tag: 'HTML',
      task: 'Services page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 9,
      userId: 3,
      stage: 'todo',
      tag: 'CSS',
      task: 'Gallery css',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 10,
      userId: 1,
      stage: 'todo',
      tag: 'JS',
      task: 'Gallery JS',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
  ];

  return (
    <div className="App">
      <Header/>
      <Main tasksData={data} usersData={users} />
      <Aside data={data} />
    </div>
  );
}

export default App;
