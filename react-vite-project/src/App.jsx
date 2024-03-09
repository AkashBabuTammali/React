import Button from './Button';
function greet(name){
  return name;
}
function App() {
  const name = "Akash";
  return (
    <>
    <h1>Good Morning {greet(name)}</h1>
    <Button/>
    </>
  )
}
export default App
