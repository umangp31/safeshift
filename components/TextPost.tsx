import React from "react";
import { useStore } from "../store/store";

type Props = {};

function TextPost({}: Props) {
    const {activeTab,setActiveTab}=useStore();

  return (
    <li className="text-white" role="presentation">
      <button
        className={`inline-block p-4 rounded-t-lg ${
          activeTab=="text"? "border-b-2" : "border-b-0 "
        } `}
        id="profile-tab"
        data-tabs-target="#profile"
        type="button"
        role="tab"
        aria-controls="profile"
        onClick={() => setActiveTab("text")}
      >
        Text Content
      </button>
    </li>
  );
}

export default TextPost;
