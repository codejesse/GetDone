import { Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'react-uuid';
import AddTaskButton from './AddTaskButton';
import Card from './Card';

export default function Workspace({ tag, currentEvent, events, setEvents }) {
    const handleAdd = () => {
        const name = prompt('Enter task title:')
        const desc = prompt('Enter task description:')
        if (!(name && desc)) return;
        setEvents((prev) => {
            const arrCopy = [...prev];
            const index = prev.findIndex(
                (event) => event.title === currentEvent.title
            )
            const eventCopy = arrCopy[index];
            // Remove old and add the latest data
            arrCopy.splice(index, 1, {
                ...eventCopy,
                [tag]: [
                    ...eventCopy[tag],
                    { name: name, id: uuid(), desc: desc },
                ],
            });
            return arrCopy;
        });
    }
    const handleRemove = (id) => {
        setEvents((prev) =>
            prev.map((event) => {
                if (event.title === currentEvent.title) {
                    const taskList = event[tag];
                    const index = taskList.findIndex((item) => item.id === id);
                    taskList.splice(index, 1);
                    return { ...event, [tag]: [...taskList] };
                } else {
                    return event;
                }
            })
        );
    };

    return (
        <div className="w-96 h-100 mt-3 m-auto flex-column border p-6">
            <div onClick={handleAdd} className='bg-violet-100 h-12 flex flex-row p-3 rounded-md cursor-pointer mb-6 justify-center'>
                <AddTaskButton />
                <p>Add Task</p>
            </div>
            <Droppable droppableId={tag}>
                {(provided, snapshot) => {
                    return (
                        <div ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {events
                                .find((event) => event.title === currentEvent.title)
                                ?.[tag].map((item, index) => {
                                    return (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => {
                                                return (
                                                    <Card
                                                        name={item.name}
                                                        desc={item.desc}
                                                        id={item.id}
                                                        provided={provided}
                                                        snapshot={snapshot}
                                                        handleRemove={handleRemove}
                                                    />
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
        </div>
    )
}