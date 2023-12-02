const TabSwitch = ({ name }) => {
  return (
    <div className="btn-container">
      {/* {name.map((item)=>{
        return(
            <button type="button" className="job-btn">
        Tommy
      </button>
        )
      })} */}
      <button type="button" className="job-btn active-btn">
        Tommy
      </button>
    </div>
  );
};
export default TabSwitch;
