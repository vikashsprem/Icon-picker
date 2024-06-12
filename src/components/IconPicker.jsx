import { useState } from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import './IconPicker.css';

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight,
  pickerWidth,
  onSelectIcon,
}) => {
  const iconList = Object.keys(Icons);
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(iconList.length / iconsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const startIdx = currentPage * iconsPerPage;
  const currentIcons = iconList.slice(startIdx, startIdx + iconsPerPage);

  return (
    <div className="icon-picker" style={{ height: pickerHeight, width: pickerWidth }}>
      <div className="icon-picker-header">
        <h3 style={{fontFamily:'cursive', margin:'3px'}}>Select App Icon</h3>
        <button onClick={() => onSelectIcon(null)}>X</button>
      </div>
      <div
        className="icon-picker-body"
        style={{
          gridTemplateColumns: `repeat(${columnsInOnePage}, 1fr)`,
          gridTemplateRows: `repeat(${rowsInOnePage}, auto)`,
        }}
      >
        {currentIcons.map((iconName, index) => {
          const IconComponent = Icons[iconName];
          return (
            <div
              key={index}
              className="icon-picker-item"
              style={{ height: iconHeight, width: iconWidth }}
              onClick={() => onSelectIcon(<IconComponent size={iconHeight} />)}
            >
              <IconComponent size={iconHeight} />
            </div>
          );
        })}
      </div>
      <div className="icon-picker-footer">
        <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
        <span>Page {currentPage + 1} of {totalPages}</span>
        <button disabled={currentPage === totalPages - 1} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
        <button onClick={() => onSelectIcon(null)}>Done</button>
      </div>
    </div>
  );
};

IconPicker.propTypes = {
  rowsInOnePage: PropTypes.number.isRequired,
  columnsInOnePage: PropTypes.number.isRequired,
  iconHeight: PropTypes.number.isRequired,
  iconWidth: PropTypes.number.isRequired,
  pickerHeight: PropTypes.number,
  pickerWidth: PropTypes.number,
  onSelectIcon: PropTypes.func.isRequired,
};

IconPicker.defaultProps = {
  pickerHeight: 500,
  pickerWidth: 500,
};

export default IconPicker;
