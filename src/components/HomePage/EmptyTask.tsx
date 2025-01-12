import React from "react";
import TaskIcon from "../icon/TaskIcon";
import Button from "../common/Button";

const EmptyTask = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[70vh]">
      <TaskIcon />
      <p>You have no task listed.</p>
      <Button title={"Create task"} />
    </div>
  );
};

export default EmptyTask;
