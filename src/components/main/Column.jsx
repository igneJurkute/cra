import { BsThreeDots } from 'react-icons/bs';
import style from './Main.module.css';

export function Column({title, tasks}) {
    return (
        <div className={style.column}>
            <div className={style.columnHeader}>
                <p>{title} ({tasks.length})</p>
                <BsThreeDots />
            </div>
            <div className={style.cardList}>
                { tasks.map(task => <div key={task.id} className={style.card}>TASK {task.id}</div>) }
            </div>
            <div className={style.addTask}>
                ADD TASK
            </div>
        </div>
    );
}