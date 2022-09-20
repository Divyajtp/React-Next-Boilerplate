import React, { Component } from "react";
import Articles from "../../src/components/options/articles";

const Comment = () => {
  return (
    <div className={`h-screen flex overflow-hidden bg-gray-100 font-manrope `}>
      <main className="flex-1 relative dark:bg-dark-chosen overflow-y-auto focus:outline-none overflow-x-hidden">
        <div className="py-6">
          <Articles />
        </div>
      </main>
    </div>
  );
};

export default Comment;
