// import ListGroup from "./components/ListGroup.tsx";
// import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";

function App()
{

    return (
        <Button
            color='danger'
            onClick={()=>console.log('clicked')}>ClickMe</Button>
    )
    // return (
    //     <Alert>
    //         <p>Haha! I Gotcha</p>
    //     </Alert>
    // )
    // const items = ['Yangon', 'NewYork', 'London', 'Tokyo']
    // const handleSelectItem = (item:string) => console.log(item)
    // return <div><ListGroup
    //     items={items}
    //     heading='List Group'
    //     onSelectItem={handleSelectItem}
    // ></ListGroup></div>
}

export default App;