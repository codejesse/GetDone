import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

export default function CardContainer({ events, setEvents, currentEvent, setCurrentEvent }) {
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        const curEvent = events.find((item) => item.title === currentEvent.title);
        const taskCopy = curEvent[source.droppableId][source.index];
        setEvents((prev) =>
            prev.map((event) => {
                if (event.title === currentEvent.title) {
                    let eventCopy = { ...event };
                    // Remove from source
                    const taskListSource = event[source.droppableId];
                    taskListSource.splice(source.index, 1);
                    eventCopy = { ...event, [source.droppableId]: taskListSource };
                    // Add to destination
                    const taskListDes = event[destination.droppableId];
                    taskListDes.splice(destination.index, 0, taskCopy);
                    eventCopy = { ...event, [destination.droppableId]: taskListDes };
                    return eventCopy;
                } else {
                    return event;
                }
            })
        );
    };
    return (
        <div className='mt-3'>
            <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
                <div className='flex flex-column'>
                    <Column
                        tag='To do'
                        events={events}
                        setEvents={setEvents}
                        currentEvent={currentEvent}
                    />
                    <Column
                        tag='In progress'
                        events={events}
                        setEvents={setEvents}
                        currentEvent={currentEvent}
                    />
                    <Column
                        tag='Completed'
                        events={events}
                        setEvents={setEvents}
                        currentEvent={currentEvent}
                    />
                </div>
            </DragDropContext>
        </div>
    )
}