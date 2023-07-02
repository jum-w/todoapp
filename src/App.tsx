import { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";

function App() {
  const [popup, setPopup] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const toggleOpen = () => {
    setPopup(!popup);
  };

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    const parsedData = data ? JSON.parse(data) : null;
    setData(parsedData);
  }, [data]);

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center">
      <div className="w-2/3 mt-4">
        <div className="flex justify-between mb-4 items-center">
          <h1 className="text-2xl font-bold">Your upcoming tasks</h1>
          <button
            className="text-center bg-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 duration-150"
            onClick={toggleOpen}
          >
            + New Task
          </button>
        </div>
        <div className="">
          {data &&
            data.map((val: any, index: number) => {
              return (
                <div className="" key={index}>
                  <Tasks
                    name={val.name}
                    desc={val.desc}
                    date={val.newDate}
                    id={index}
                    load={setLoad}
                  />
                </div>
              );
            })}
        </div>
      </div>
      {popup && (
        <>
          <CreateTask popup={setPopup} />
          <div className="fixed bg-black bg-opacity-50 inset-0"></div>
        </>
      )}
    </div>
  );
}

export default App;
