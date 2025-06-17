import { BsPlusCircleDotted } from 'react-icons/bs';
import style from './Main.module.css';
import { Column } from './Column';

export function Main({data}) {
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
           <Column title='Task ready' tasks={data.filter(item => item.stage === 'todo')} />
            <Column title='In progress' tasks={data.filter(item => item.stage === 'progress')} />
            <Column title='Needs review' tasks={data.filter(item => item.stage === 'review')} />
            <Column title='Done' tasks={data.filter(item => item.stage === 'done')} />
        </main>
    );
}