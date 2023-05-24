import "./App.css";
import AppRoutes from "./routes/routes";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <AppRoutes />
        </div>
    );
}

export default App;
