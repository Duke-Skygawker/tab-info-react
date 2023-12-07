import { FaAnglesRight } from "react-icons/fa6";

const Duties = ({ duty }) => {
  return (
    <div className="job-desc">
      <i className="job-icon">
        <FaAnglesRight />
      </i>
      <p>{duty}</p>
    </div>
  );
};
export default Duties;
