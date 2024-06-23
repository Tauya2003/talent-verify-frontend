import {
  AdminPanelSettingsTwoTone,
  BadgeTwoTone,
  BusinessTwoTone,
  DriveFolderUploadTwoTone,
  FormatListBulletedTwoTone,
  SearchTwoTone,
  SecurityTwoTone,
  SettingsAccessibilityTwoTone,
  SummarizeTwoTone,
  UploadFileTwoTone,
  WorkHistoryTwoTone,
} from "@mui/icons-material";

export const menuItems = [
  {
    name: "Employee Management",
    items: [
      {
        name: "Employee List",
        icon: <FormatListBulletedTwoTone sx={{ color: "#4CAF50" }} />,
      },
      {
        name: "Employee Details",
        icon: <BadgeTwoTone sx={{ color: "#4CAF50" }} />,
      },
      {
        name: "Employee Search",
        icon: <SearchTwoTone sx={{ color: "#4CAF50" }} />,
      },
    ],
    isOpen: false,
  },
  {
    name: "Company Management",
    items: [
      {
        name: "Company Profile",
        icon: <BusinessTwoTone sx={{ color: "#4CAF50" }} />,
      },
      {
        name: "Company Settings",
        icon: <AdminPanelSettingsTwoTone sx={{ color: "#4CAF50" }} />,
      },
    ],
    isOpen: false,
  },
  {
    name: "Data Management",
    items: [
      {
        name: "Bulk Upload",
        icon: <DriveFolderUploadTwoTone sx={{ color: "#4CAF50" }} />,
      },
      {
        name: "Single Entry",
        icon: <UploadFileTwoTone sx={{ color: "#4CAF50" }} />,
      },
    ],
    isOpen: false,
  },
  {
    name: "History",
    items: [
      {
        name: "Employee History",
        icon: <WorkHistoryTwoTone sx={{ color: "#4CAF50" }} />,
      },
    ],
    isOpen: false,
  },
  {
    name: "Settings",
    items: [
      {
        name: "User Preferences",
        icon: <SettingsAccessibilityTwoTone sx={{ color: "#4CAF50" }} />,
      },
      {
        name: "Security Settings",
        icon: <SecurityTwoTone sx={{ color: "#4CAF50" }} />,
      },
    ],
    isOpen: false,
  },
  {
    name: "Reports",
    items: [
      {
        name: "Employee Reports",
        icon: <SummarizeTwoTone sx={{ color: "#4CAF50" }} />,
      },
      {
        name: "Company Reports",
        icon: <SummarizeTwoTone sx={{ color: "#4CAF50" }} />,
      },
    ],
    isOpen: false,
  },
];
