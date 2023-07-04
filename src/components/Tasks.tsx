import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type Props = {
  name: string;
  date: string;
  desc: string;
  id: number;
  load: (value: boolean) => void;
};

const Tasks = (props: Props) => {
  const completeTask = (id: number) => {
    const data = localStorage.getItem("tasks");
    localStorage.removeItem("tasks");
    const jsonData = data ? JSON.parse(data) : [];
    jsonData.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(jsonData));
    props.load(!load);
  };

  return (
    <div className="flex border justify-center items-center shadow-sm rounded-md border-gray-200 w-full px-4">
      <div className="w-[10%] p-2 flex justify-start">
        <button
          onClick={() => {
            completeTask(props.id);
          }}
          className="border-gray-400 border rounded-full w-7 h-7 flex items-center justify-start"
        >
          <FontAwesomeIcon
            icon={faCheck}
            className="text-gray-400 hover:text-yellow-400 p-2"
          />
        </button>
      </div>
      <div className="w-[60%] p-2">
        <h1>{props.name}</h1>
        <h2 className="text-gray-500">{props.desc}</h2>
      </div>
      <div className="w-[30%] p-2 flex justify-end">
        <h1>{props.date} days</h1>
      </div>
    </div>
  );
};

export default Tasks;
function load(arg0: boolean) {
  throw new Error("Function not implemented.");
}
