import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import TabSwitch from "./TabSwitch";
import Tab from "./Tab";
// import jobs from "./data";
const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const companies = [];

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    setData(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  data.map((job) => {
    companies.push(job.company);
  });

  const filterJobs = (index) => {
    setCurrentItem(index);
  };

  return (
    <main>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="jobs-center">
            <TabSwitch
              companies={companies}
              currentItem={currentItem}
              filter={filterJobs}
            />
            <Tab job={data[currentItem]} />
          </section>
        )}
      </div>
    </main>
  );
};
export default App;
