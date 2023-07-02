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
      <div className="w-1/5 p-2 flex justify-start">
        <input
          type="checkbox"
          onClick={() => {
            completeTask(props.id);
          }}
        />
      </div>
      <div className="w-3/5 p-2">
        <h1>{props.name}</h1>
        <h2 className="text-gray-500">{props.desc}</h2>
      </div>
      <div className="w-1/5 p-2 flex justify-end">
        <h1>{props.date}</h1>
      </div>
    </div>
  );
};

export default Tasks;
function load(arg0: boolean) {
  throw new Error("Function not implemented.");
}
