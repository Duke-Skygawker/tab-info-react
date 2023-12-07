import { v4 as uuidv4 } from "uuid";
import Duties from "./Duties";

const Tab = ({ job }) => {
  const { company, dates, title, duties } = job;
  return (
    <div>
      <h4>{title}</h4>
      <p className="job-company">{company}</p>
      <p className="job-date">{dates}</p>
      <div>
        {duties.map((duty) => {
          const id = uuidv4();
          return <Duties duty={duty} key={id} />;
        })}
      </div>
    </div>
  );
};
export default Tab;
