import AddButton from "./AddTaskButton";

export default function Tabs() {
    return (
        <div className="flex flex-row w-100 mt-8">
            <div className="m-auto w-96 h-14 shadow-2xl rounded">
                <div className="w-auto h-1 bg-fuchsia-600 rounded-t"></div>
                <div className="m-3 flex flex-row w-100">BACKLOG <div className=" ml-56 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg></div><AddButton /></div>
            </div>
            <div className="m-auto w-96 h-14 shadow-2xl rounded">
                <div className="w-auto h-1 bg-amber-600 rounded-t"></div>
                <div className="m-3 flex flex-row w-100">PROGRESS <div className="ml-56 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg></div><AddButton /></div>
            </div>
            <div className="m-auto w-96 h-14 shadow-2xl rounded">
                <div className="w-auto h-1 bg-green-600 rounded-t"></div>
                <div className="m-3 flex flex-row">COMPLETED <div className=" ml-56 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg></div><AddButton /></div>
            </div>
        </div>
    )
}