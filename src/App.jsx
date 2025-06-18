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
      img: 'user1.png',
    },
    {
      id: 2,
      name: 'Karen',
      img: 'user2.png',
    },
    {
      id: 3,
      name: 'Steve',
      img: 'user3.png',
    },
  ];

  const data = [
    {
      id: 1,
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
      stage: 'done',
      tag: 'CSS',
      task: 'Responsive design',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 3,
      stage: 'done',
      tag: 'HTML',
      task: '404 page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 4,
      stage: 'progress',
      tag: 'CSS',
      task: 'Basic style css file',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 5,
      stage: 'progress',
      tag: 'JS',
      task: 'Clock js',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 6,
      stage: 'review',
      tag: 'CSS',
      task: 'Clock CSS',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 7,
      stage: 'progress',
      tag: 'HTML',
      task: 'About us page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 8,
      stage: 'review',
      tag: 'HTML',
      task: 'Services page',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 9,
      stage: 'todo',
      tag: 'CSS',
      task: 'Gallery css',
      createdAt: 1650532562551,
      dueDate: 1650532562551,
    },
    {
      id: 10,
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
      <Main data={data} />
      <Aside data={data} />
    </div>
  );
}

export default App;
