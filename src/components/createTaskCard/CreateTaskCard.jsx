import style from './CreateTaskCard.module.css';

export function CreateTaskCard({onDoneFunc}) {
    function formDone() {
        onDoneFunc();
    }

    return (
        <div>
            <p>CREATE TASK CARD</p>
            <button onClick={formDone}>Done</button>
        </div>
    );
}