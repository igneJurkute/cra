import { BsPlusCircleDotted } from 'react-icons/bs';
import style from './Main.module.css';
import { Column } from './Column';

export function Main({tasksData, usersData}) {
    return (
        <main className={style.main}>
            <div className={style.header}>
                <h1>Homepage design</h1>
                <div className={style.team}>
                    <img src="/" alt="Team member" />
                    <img src="/" alt="Team member" />
                    <img src="/" alt="Team member" />
                    <BsPlusCircleDotted size='1.6rem' />
                </div>
            </div>
           <Column title='Task ready'
                tasks={tasksData.filter(item => item.stage === 'todo')}
                users={usersData} />
            <Column title='In progress'
                tasks={tasksData.filter(item => item.stage === 'progress')}
                users={usersData} />
            <Column title='Needs review'
                tasks={tasksData.filter(item => item.stage === 'review')}
                users={usersData} />
            <Column title='Done'
                tasks={tasksData.filter(item => item.stage === 'done')}
                users={usersData} />
        </main>
    );
}