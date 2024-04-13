import { Provider } from "react-redux"
import store from "./store"
import Timer from "./components/Timer"


function App() {
  return(
    <Provider store={store}>
      <h1 className="text-5xl md:text-4xl text-center font-thin pt-8 px-6">
				Redux Stopwatch
			</h1>
			<Timer/>
    </Provider>
  )  
}

export default App
