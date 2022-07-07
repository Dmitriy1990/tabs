import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
  },
  indicator: {
    background: "#C0FA1A !important",
  },

  tabRoot: {
    fontSize: 14,
    color: "#241F1F !important",
    paddingBottom: 19,
    fontWeight: "600 !importan",
    marginRight: "30px !important",
  },
  selectedTab: {
    color: "#C0FA1A !important",
  },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        classes={{ indicator: classes.indicator }}
      >
        <Tab
          classes={{ root: classes.tabRoot, selected: classes.selectedTab }}
          className={classes.root}
          label="Первый"
          {...a11yProps(0)}
          disableTouchRipple
          style={{ fontWeight: 600 }}
        />
        <Tab
          classes={{ root: classes.tabRoot, selected: classes.selectedTab }}
          label="Второй"
          {...a11yProps(1)}
          disableTouchRipple
          style={{ fontWeight: 600 }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
