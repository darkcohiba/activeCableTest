import Chatroom from "./Chatroom";


function Home({user}) {
    console.log(user)
    return (
        <div>
            {user ? <h1>Welcome {user.username}</h1> : <h1>Welcome, login or sign up to chat!</h1>}
            <Chatroom />
        </div>
    );
}

export default Home;