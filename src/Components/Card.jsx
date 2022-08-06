export default function Card({ name, desc, id, provided, handleRemove }) {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="m-auto w-100 border shadow-md bg-white-600 h-35 rounded-2xl p-3 mb-3">
            <h2 className="text-2xl mb-3">{name}</h2>
            <p className="text-stone-500">{desc}</p>
            <div className="flex flex-row mt-3" onClick={() => handleRemove(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Delete
            </div>
        </div>
    )
}