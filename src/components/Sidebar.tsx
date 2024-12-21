import { useState } from "react"
import { SIDEBAR_OPTIONS } from "@/constants"
import { Button } from "antd";

interface SidebarOptions {
  ALL_TASKS: string;
  FAVORITES: string;
  GROCERIES: string;
  WORK: string;
  STUDY: string;
  SPORTS: string;
}

const Sidebar = () => {

  const sideBarOptions = SIDEBAR_OPTIONS as SidebarOptions;

  const [selectedSideBarOption, setSelectedSideBarOption] = useState(sideBarOptions.ALL_TASKS);

  return (
    <div className="sidebar-container">
      {Object.values(sideBarOptions).map((option) => (
        <Button
          size="large"
          type="text"
          onClick={() => setSelectedSideBarOption(option)}
          key={option}
          className={`${selectedSideBarOption === option ? 'selected' : ''}`}
        >
          {option}
        </Button>
      ))
      }
      <Button
        type="dashed"
        size="large"
        className="add-category-button"
      >
        Add Category
      </Button>
    </div >
  )
};

export default Sidebar;