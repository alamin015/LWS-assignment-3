import Done from "./Done";
import OnProgress from "./OnProgress";
import ProjectifyTop from "./ProjectifyTop";
import Revise from "./Revise";
import ToDo from "./ToDo";

export default function Projectify() {
  return (
    <div className='mx-auto max-w-7xl p-6'>
      <ProjectifyTop />
      <div className='-mx-2 mb-6 flex flex-wrap'>
        <ToDo />
        <OnProgress />
        <Done />
        <Revise />
      </div>
    </div>
  );
}
