import { useState } from "react"

export default function EmojiClicker() {
    const [emojis,setEmoji] = useState([{"😎"}])

    const addEmoji = () => {
        setEmoji([...emojis,"👀"]);
    };
    return (
        <div>
            {emojis.map((e)=> (
                <span>{e}</span>
            ))}
            <button onClick={addEmoji}>add emoji</button>
        </div>
    );
}

