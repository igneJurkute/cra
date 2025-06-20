import { useState } from 'react'; // hook
import { BsThreeDots } from 'react-icons/bs';
import { TbUserQuestion } from 'react-icons/tb';
import style from './Main.module.css';
import { TaskCard } from './TaskCard';
import { CreateTaskCard } from '../createTaskCard/CreateTaskCard';

export function Column({title, tasks, users}) {
    const [isFormVisible, setFormVisibility] = useState(false);
    
    function getUser(task) {
        for (const user of users) {
            if (user.id === task.userId) {
                return user;
            }
        }

        return {
            name: 'Anoni-mouse',
            img: <TbUserQuestion size='1.5rem' />,
        };
    }

    function showForm() {
        setFormVisibility(true);
    }

    function hideForm() {
        setFormVisibility(false);
    }

    return (
        <div className={style.column}>
            <div className={style.columnHeader}>
                <p>{title} ({tasks.length})</p>
                <BsThreeDots />
            </div>
            <div className={style.cardList}>
                { tasks.map(taskObj => <TaskCard key={taskObj.id} 
                    data={taskObj} 
                    user={getUser(taskObj)} />) }
            </div>
            <div className={style.addTask}>
                {isFormVisible ? <CreateTaskCard onDoneFunc={hideForm} /> : <div onClick={showForm}>+ Add task</div> }
            </div>
        </div>
    );
}