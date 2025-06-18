import { BsThreeDots, BsFlagFill } from 'react-icons/bs';
import { BiSolidMessage } from 'react-icons/bi';
import { RiAttachment2 } from 'react-icons/ri';
import style from './Main.module.css';

export function TaskCard({data: {tag, task, dueDate}}) {
    const date = 'Nov 24'; // <- dueDate new Date(dueDate)

    return (
        <article className={style.card}>Add commentMore actions
            <header className={style.cardTop}>
                <p className={style.tag}>{tag}</p>
                <BsThreeDots />
            </header>
            <p>{task}</p>
            <footer className={style.cardBottom}>
                <div className={style.trio}>
                    <div className={style.info}>
                        <BsFlagFill color='#aaa' />
                        <p>{date}</p>
                    </div>
                    <div className={style.info}>
                        <BiSolidMessage color='#aaa' />
                        <p>2</p>
                    </div>
                    <div className={style.info}>
                        <RiAttachment2 color='#aaa' />
                        <p>5</p>
                    </div>
                </div>
                <img src='/' alt='User' />
            </footer>
        </article>
    );
}