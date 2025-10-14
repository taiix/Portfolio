import './style/messageStyle.css';

function Message(){
  const name = "Stanislav Velikov";
  const gameDevText = "Game Developer";
  return (
    <header className="hero" role="banner">
      <h1 className="name">{name}</h1>
      <h2 className="gameDevTextElement">{gameDevText}</h2>
    </header>
  );
}

export default Message;