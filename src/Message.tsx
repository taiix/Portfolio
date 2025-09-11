import '../src/style/messageStyle.css';

function Message(){
    const name ="Stanislav Velikov";
    const gameDevText = "Game Developer";
    return (
    <>
        <h1 className="name">{name}</h1>
        <h1 className="gameDevTextElement">{gameDevText}</h1>
    </>);
}

export default Message; //Can be used outside