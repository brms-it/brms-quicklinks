import React from 'react';
import { Grid, Typography, Paper, Button, Divider } from '@material-ui/core';

const { shell } = require('electron');

const styles = {
  paper: {
    backgroundColor: '#f7f7f7',
    padding: '20px 30px 30px 30px',
    minWidth: 180,
    height: '100%',
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#c5050c',
    color: '#f7f7f7',
    width: '80%',
    minHeight: 50,
    marginBottom: 15,
    textAlign: 'center',
  },
  root: {
    // height: '100%'
  },
  labelText: {
    textAlign: 'center',
    color: '#646569',
  },
  divider: {
    color: '#646569',
    marginBottom: 15,
  },
  labelContainer: {
    width: '100%',
  },
  sectionSpacer: {
    height: 20,
  },
  heading: {
    textAlign: 'center',
    marginTop: 0,
  },
};

const WebLink = ({ label, url }) => {
  console.log('url: ', url);

  return (
    <Button
      onClick={() => shell.openExternal(url)}
      variant="outlined"
      style={styles.button}
    >
      {label}
    </Button>
  );
};

const Label = ({ text }) => {
  return (
    <div style={styles.labelContainer}>
      <Typography style={styles.labelText}>{text}</Typography>
      <Divider style={styles.divider} />
    </div>
  );
};

export default function Home() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={styles.root}
    >
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        <Paper style={styles.paper}>
          <h2 style={styles.heading}>BRMS Quick Access</h2>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Label text="Research Support Tools" />
            <WebLink
              label="Sick & Dead Animal Reporting"
              url="https://lar.medsch.wisc.edu/internal/rst"
            />
            <WebLink
              label="Overcrowded Cage Reporting"
              url="https://ocr.brms.wisc.edu"
            />
            <WebLink
              label="Resource Scheduler"
              url="https://brms.wisc.edu/about/facilities/resource-scheduler/"
            />
            <WebLink
              label="Protocol Special Considerations"
              url="https://ahw.wisc.edu/special-considerations"
            />
            <div style={styles.sectionSpacer} />
            <Label text="Admin" />
            <WebLink label="BRMS Home" url="https://brms.wisc.edu" />
            <WebLink label="SDS" url="https://brms.wisc.edu/safety-data-sheets/" />
            <WebLink
              label="Timesheet"
              url="https://www.hrs.wisconsin.edu/psc/hrs-fd/EMPLOYEE/HRMS/c/NUI_FRAMEWORK.PT_AGSTARTPAGE_NUI.GBL?CONTEXTIDPARAMS=TEMPLATE_ID:PTPPNAVCOL&scname=HC_TIME&AJAXTransfer=Y&PanelCollapsible=Y&PTPPB_GROUPLET_ID=TL_TIME_ESS&CRefName=HC_NAVCOLL_7"
            />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
