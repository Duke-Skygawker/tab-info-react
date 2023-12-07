import { v4 as uuidv4 } from "uuid";

const TabSwitch = ({ companies, filter, currentItem }) => {
  return (
    <div className="btn-container">
      {companies.map((item, index) => {
        const id = uuidv4();
        return (
          <button
            type="button"
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            key={id}
            onClick={() => filter(index)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default TabSwitch;
