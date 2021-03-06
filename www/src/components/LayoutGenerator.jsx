import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '~paragon-react';
import classNames from 'classnames';
import CodeBlock from './CodeBlock';


const Column = ({
  index, width, onChangeWidth, offset, onChangeOffset,
}) => (
  <div
    className={classNames('col mb-4', {
      [`col-${width}`]: width > 0,
      [`offset-${offset}`]: offset > 0,
    })}
  >
    <div
      className="text-align-center p-1"
      style={{ background: '#eee', minHeight: '2rem' }}
    >
      <div className="form-inline m-2">
        <label
          className="font-weight-normal"
          htmlFor={`column-${index}-width`}
        >
          Width
        </label>
        <Input
          type="number"
          id={`column-${index}-width`}
          className="form-control-sm"
          value={width}
          placeholder="Width (1 - 12)"
          style={{ width: '3rem' }}
          min={0}
          step={1}
          max={12}
          onChange={e => onChangeWidth(index, e.target.value)}
        />
      </div>
      <div className="form-inline m-2">
        <label
          className="font-weight-normal"
          htmlFor={`column-${index}-offset`}
        >
          Offset
        </label>
        <Input
          type="number"
          id={`column-${index}-offset`}
          className="form-control-sm"
          value={offset}
          placeholder="Offset (1 - 11)"
          style={{ width: '3rem' }}
          min={0}
          step={1}
          max={11}
          onChange={e => onChangeOffset(index, e.target.value)}
        />
      </div>
    </div>
  </div>
);

Column.propTypes = {
  index: PropTypes.number.isRequired,
  width: PropTypes.number,
  onChangeWidth: PropTypes.func.isRequired,
  offset: PropTypes.number,
  onChangeOffset: PropTypes.func.isRequired,
};

Column.defaultProps = {
  width: 0,
  offset: 0,
};


function LayoutGenerator() {
  const [numColumns, setColumns] = useState(3);
  const [columnWidths, setColumnWidths] = useState({ 0: 3, 1: 6, 2: 3 });
  const [columnOffsets, setColumnOffsets] = useState({});

  const columns = [];

  for (let i = 0; i < numColumns; i++) { // eslint-disable-line no-plusplus
    columns.push((
      <Column
        key={i}
        index={i}
        width={columnWidths[i]}
        onChangeWidth={(_index, _width) => {
          setColumnWidths({ ...columnWidths, [_index]: _width });
        }}
        offset={columnOffsets[i]}
        onChangeOffset={(_index, _offset) => {
          setColumnOffsets({ ...columnOffsets, [_index]: _offset });
        }}
      />
    ));
  }

  const renderMarkupString = () => {
    const columnsString = columns.map((ColumnComponent, i) => {
      const width = columnWidths[i];
      const offset = columnOffsets[i];

      const className = classNames('col', {
        [`col-${width}`]: width > 0,
        [`offset-${offset}`]: offset > 0,
      });
      return `
  <div className="${className}">
    ${width || 'auto'}
  </div>
      `;
    });

    const rowString = `
<div className="row">
${columnsString.join('')}
</div>
    `;
    return rowString;
  };

  return (
    <div>
      <p>
        Drag the slider to add or remove columns.
        Edit the width and offset values for each
        column and see the output below.
      </p>
      <div className="form-inline mb-4">
        <label htmlFor="num-cols-range mr-2">Number of Columns {numColumns}</label>
        <Input
          id="num-cols-range"
          type="range"
          value={numColumns}
          min={1}
          step={1}
          max={12}
          onChange={e => setColumns(e.target.value)}
        />
      </div>
      <div className="row">
        {columns}
      </div>

      <CodeBlock className="language-jsx">{renderMarkupString()}</CodeBlock>


    </div>
  );
}

export default LayoutGenerator;
