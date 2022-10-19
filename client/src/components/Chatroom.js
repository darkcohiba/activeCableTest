function Chatroom() {
    return (
        <>
            <div className="flex flex-row justify-around h-screen">
                <div className="bg-blue-300 w-12 h-1/2 basis-1/3 hover:basis-1/2">
                    <h1>Chatroom 1</h1>
                </div>
                <div className="bg-yellow-300 w-12 h-1/2 basis-1/3 hover:basis-1/2">
                    <h1>Chatroom 2</h1>
                </div>
            </div>
        </>
    );
}

export default Chatroom;