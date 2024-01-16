
export function Button({setColor}) {
    
    return (
        <div>
            <button className = "custom-button" onClick = {() => setColor('red')}>Red</button>
            <button className="custom-button" onClick = {() => setColor('yellow')}>Yellow</button>
            <button className="custom-button" onClick={() => setColor('black')}>Black</button>
            <button className="custom-button" onClick={() => setColor('purple')}>Purple</button>
            <button className="custom-button" onClick = {() => setColor('green')}>Green</button>
            <button className="custom-button" onClick = {() => setColor('blue')}>Blue</button>
            <button className="custom-button" onClick={() => setColor('white')}>Default</button>
        </div>
    )   
}