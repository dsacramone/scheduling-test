import React, {useState} from 'react';
// @ts-ignore
import Scheduling from '@hellotech/scheduling';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState(false);

  // Your theming/branding.
  const theme = {
    colors: {
      // Primary brand color for links, buttons
      primary: '#00CDBE',
      primaryHover: '#02A08B',

      // Modal body background color, overlay
      background: '#ffffff',
      backgroundOverlay: 'rgba(0,0,0,.3)',

      // Hour cell
      backgroundHourCell: '#ffffff',
      backgroundHourCellText: '#263746',

      backgroundHourCellHover: 'rgb(152, 150, 181)',
      backgroundHourCellHoverText: '#263746',

      backgroundHourCellSelected: 'rgb(152, 150, 181)',
      backgroundHourCellSelectedText: '#ffffff',

      backgroundHourCellSelectedHover: 'rgb(152, 150, 181, .8)',
      backgroundHourCellSelectedHoverText: '#ffffff',

      // Border surrounding hours cell
      accent: '#ccd4dd',

      // Icons: left/right/close
      iconPrimary: '#6D7D8C',
      iconSelected: '#263746',
      iconMuted: '#ccd4dd',

      // close icon
      iconClosePrimary: '#CCD4DD',
      iconCloseSelected: '#6D7D8C',

      // Text coloring
      text: {
        primary: '#263746',
        subdued: '#6d7d8c',
        header: '#384c5e',
        inverse: '#ffffff',
      }
    }
  }

  /* METHODS */
  const onHandleSubmit = (args: any) => console.log("onHandleSubmit: ", args)
  const onHandleError = (args: any) => console.log("onHandleError: ", args)
  const onHandleClose = () => {
    setOpenModal(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit props in Scheduling module, close module, and reopen to see changes.
        </p>
        <br /><br />
        <div onClick={() => setOpenModal(true)}>{`>> Click Open Modal <<` }</div>
        <Scheduling
          openScheduling={openModal}
          token='test-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzMwMzI5LCJlbWFpbCI6ImluZm9AZW1wb3JpYWVuZXJneS5jb20iLCJ0eXBlIjoiUGFydG5lciIsInJvbGUiOm51bGwsInZlcnNpb24iOjF9.hE-tB69pKqEQGX0QPkUo7TUgEel7CPejma-8NdeWNMM'
          theme={theme}
          windowSelectionSize = {4}
          hourMilitaryRange = {[9, 16]}
          bufferedDays = {2}
          requiredWindowCount = {1}
          actions = {{
            onSubmit: onHandleSubmit,
            onError: onHandleError,
            onClose: onHandleClose
          }}
        />
      </header>
    </div>
  );
}

export default App;
