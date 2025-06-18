import { BsThreeDots } from 'react-icons/bs';
import style from './Main.module.css';
import { TaskCard } from './TaskCard';

export function Column({title, tasks}) {
    return (
        <div className={style.column}>
            <div className={style.columnHeader}>
                <p>{title} ({tasks.length})</p>
                <BsThreeDots />
            </div>
            <div className={style.cardList}>
                { tasks.map(taskObj => <TaskCard key={taskObj.id} data={taskObj} />) }
            </div>
            <div className={style.addTask}>
                ADD TASK
            </div>
        </div>
    );
}