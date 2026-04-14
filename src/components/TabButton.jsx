export default function TabButton(prop){
    function handleClick(){
        console.log('Hello World');
    }


    return <li>
        <button onClick={handleClick}>{prop.children}</button>
    </li>
}