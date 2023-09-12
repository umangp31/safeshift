import React from "react";
import {useTabStore} from '../store/store'
type Props = {};

function ImagePost({}: Props) {
    const {activeTab,setActiveTab}=useTabStore();
  return (
    <li className="text-white" role="presentation">
      <button
        className={`inline-block p-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${
          activeTab=="image"? "border-b-2" : "border-b-0" 
        } `}
        id="dashboard-tab"
        data-tabs-target="#dashboard"
        type="button"
        role="tab"
        aria-controls="dashboard"
        onClick={() => {
          setActiveTab("image");
        }}
      >
        Image Content
      </button>
    </li>
  );
}

export default ImagePost;
