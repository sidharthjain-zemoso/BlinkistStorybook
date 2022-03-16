import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

type CustomTabsProps = {
  //   value: string;
  //   handleChange?:
  //     | ((event: React.SyntheticEvent<Element, Event>, value: any) => void)
  //     | undefined;
  labels: string[];
  contents: JSX.Element[];
  sx?: Object;
  className?: string;
  tabWidth: number;
};

const TabStyles = {
  textTransform: "none",
  padding: 0,
  alignItems: "flex-start",
  width: 200,
};

const TabPanelStyles = {
  paddingLeft: 0,
  marginTop: 2,
};

const CustomTabs: React.FC<CustomTabsProps> = (props) => {
  let { labels, contents, tabWidth, className, sx, ...rest } = props;
  TabStyles.width = tabWidth;
  const [tabValue, setTabValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  return (
    <div data-testid="tabs-id" className={className} style={sx} {...rest}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {labels.map((label, idx) => (
                <Tab
                  data-testid={`tab-${idx}-id`}
                  key={idx}
                  label={label}
                  value={`${idx + 1}`}
                  sx={TabStyles}
                />
              ))}
            </TabList>
          </Box>
          {contents.map((content, idx) => (
            <TabPanel key={idx} sx={TabPanelStyles} value={`${idx + 1}`}>
              {content}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </div>
  );
};

export default CustomTabs;
