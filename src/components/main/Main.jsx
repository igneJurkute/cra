import { BsPlusCircleDotted } from 'react-icons/bs';
import style from './Main.module.css';
import { Column } from './Column';

export function Main() {
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
            <Column title='Task ready' tasks={[1, 2]} />
            <Column title='In progress' tasks={[3]} />
            <Column title='Needs review' tasks={[4, 5, 6]} />
            <Column title='Done' tasks={[7, 8]} />
        </main>
    );
}