import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import TabSwitch from "./TabSwitch";
import Tab from "./Tab";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch(api);
  //       const people = await response.json();
  //       console.log(people);
  //       setData(people);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <main>
      <div>
        <button
          type="button"
          className="btn img"
          onClick={() => setIsLoading(!isLoading)}
        >
          Switch Loading
        </button>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="jobs-center">
            <TabSwitch />
            <Tab />
          </section>
        )}
      </div>
    </main>
  );
};
export default App;
