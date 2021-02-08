import React from 'react';
import Chip from 'components/data-display/Chip';

export default function ChipsArray(props) {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Imam' },
    { key: 1, label: 'Ngadiono' },
    { key: 2, label: 'Harry' },
    { key: 3, label: 'Adi' },
    { key: 4, label: 'Shendy' },
    { key: 5, label: 'Ridho' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <>
      {chipData.map((data) => {
        return (
          <span key={data.key}>
            <Chip
              color="primary"
              label={data.label}
              onDelete={data.label === 'Imam' ? undefined : handleDelete(data)}
              {...props}
            />
          </span>
        );
      })}
    </>
  );
}