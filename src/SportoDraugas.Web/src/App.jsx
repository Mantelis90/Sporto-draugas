import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState("loading");
  useEffect(() => {
      async function checkApi(){
          try {
              const response = await fetch("/api/health");
              
              if (!response.ok) {
                  throw Error(`Serveris grąžino ${response.status}`);
              }
              const data = await response.json();
              setApiStatus(data.status);
          } catch (error) {
              console.log(error);
              setApiStatus("error");
          }
      }
      
      
      checkApi();
  },[]);
  return (
    <main>
        <p>
            API būsena:{""}
            {apiStatus === "loading" && "tikrinama..."}
            {apiStatus === "ok" && "veikia"}
            {apiStatus === "error" && "nepasiekiamas"}
        </p>
     <h1>Sporto draugas</h1>
      <p>Rask žmogų, su kuriuo lengviau pradėti sportuoti.</p>
    </main>
  );
}

export default App
