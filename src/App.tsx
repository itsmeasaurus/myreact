import ListGroup from "./components/ListGroup.tsx";

function App()
{
    const items = ['Yangon', 'NewYork', 'London', 'Tokyo']
    const handleSelectItem = (item:string) => console.log(item)
    return <div><ListGroup
        items={items}
        heading='List Group'
        onSelectItem={handleSelectItem}
    ></ListGroup></div>
}

export default App;