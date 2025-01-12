"use client";
import React, { useState } from "react";
import Header from "./Header";
import EmptyTask from "./EmptyTask";

interface Task {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>("");

  const handleCreateTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
      setTaskName("");
    }
  };

  return (
    <div>
      <Header />
      <EmptyTask />
    </div>
  );
};

export default Home;
