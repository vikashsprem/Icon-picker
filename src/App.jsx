import { useState } from 'react';
import IconPicker from './components/IconPicker';
import './App.css';

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <div className="App">
      <div className="icon-display" onClick={() => setIsPickerOpen(true)}>
        {selectedIcon ? selectedIcon : <p>Click to select an icon</p>}
      </div>
      {isPickerOpen && (
        <IconPicker
          rowsInOnePage={5}
          columnsInOnePage={7}
          iconHeight={50}
          iconWidth={50}
          pickerHeight={500}
          pickerWidth={500}
          onSelectIcon={(icon) => {
            setSelectedIcon(icon);
            setIsPickerOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
