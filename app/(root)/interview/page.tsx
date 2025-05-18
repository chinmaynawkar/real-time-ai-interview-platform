import Agent from "@/components/Agent";
import React from "react";

const InterviewPage = () => {
  return (
    <>
      <h3 className="text-2xl font-bold">Interview Generation</h3>
      <Agent username="John Doe" userId="user1" type="generate" />
    </>
  );
};

export default InterviewPage;
