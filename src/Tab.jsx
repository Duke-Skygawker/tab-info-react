import { v4 as uuidv4 } from "uuid";
import Duties from "./Duties";
const duties = [
  "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
  "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
  "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
];

const Tab = () => {
  return (
    <div>
      <h4>Full Stack Developer</h4>
      <p className="job-company">TOMMY</p>
      <p className="job-date">december 2015 - present</p>
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
