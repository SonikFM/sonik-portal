import Chat from "./Chat";

const ChatBoard = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(i => (
        <Chat key={i} className={i === 5 ? "border-b-0" : "border-b"} />
      ))}
    </div>
  );
};

export default ChatBoard;
