import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type Props = {
  popup: (value: boolean) => void;
};

const CreateTask = (props: Props) => {
  var currDate = new Date();
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [date, setDate] = useState<Date>(currDate);
  const [error, setError] = useState(0);

  useEffect(() => {});

  const submitData = () => {
    setError(0);
    if (name.length > 0 && desc.length > 0 && date >= currDate) {
      var day = date.getDate();
      var days = day - currDate.getDate();
      const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const task = { name, desc, days };
      const allTasks = [...existingTasks, task];

      localStorage.setItem("tasks", JSON.stringify(allTasks));

      props.popup(false);
    } else if (name.length === 0) {
      setError(1);
    } else if (desc.length === 0) {
      setError(2);
    } else {
      setError(3);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-gray-50 rounded-md shadow-md p-4 w-96 ">
        <div className="flex justify-between my-4">
          <h1 className="font-bold text-xl">Create a task</h1>
          <button
            className="fond-bold hover:text-red-600"
            onClick={() => {
              props.popup(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="flex flex-col my-4">
          <label className="mb-1 text-gray-600">Task Name:</label>
          <input
            type="text"
            maxLength={20}
            className={`border px-2 py-1 rounded-md ${
              error === 1 ? "border-red-600" : ""
            }`}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="mb-1 text-gray-600">Description:</label>
          <input
            type="text"
            maxLength={30}
            className={`border px-2 py-1 rounded-md ${
              error === 2 ? "border-red-600" : ""
            }`}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-4">
          <label className="mb-1 text-gray-600">Date:</label>
          <input
            type="date"
            className={`border px-2 py-1 rounded-md ${
              error === 3 ? "border-red-600" : ""
            }`}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
        </div>
        <div className="flex justify-between mt-12">
          <button
            className="text-gray-400 hover:text-red-600 px-1"
            onClick={() => {
              props.popup(false);
            }}
          >
            Cancel
          </button>
          <button
            className="bg-blue-400 px-4 py-1 rounded-m hover:bg-blue-500 duration-150 rounded-md"
            onClick={submitData}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
