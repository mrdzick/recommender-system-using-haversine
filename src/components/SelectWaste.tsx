import { Select, Option } from '@material-tailwind/react';
import { Wastes } from '../services/api';

type SelectWasteMenuProps = {
  selectedWaste?: number;
  wastes?: Wastes[];
  fallbackSelectWaste?: (wasteId: string) => void;
}

const SelectWasteMenu = ({ wastes, fallbackSelectWaste }: SelectWasteMenuProps) => {  
  const handleSelectChange = (event: any) => {
    fallbackSelectWaste && fallbackSelectWaste(event as unknown as string || '');
    return;
  };
  return (
    <div className="w-72 select__menu">
      <Select label="Pilih Jenis Limbah" onChange={handleSelectChange}>
        {
          wastes && wastes.map((waste) => (
            <Option key={waste.id} value={waste.id.toString()}>{waste.name}</Option>
          ))
        }
      </Select>
    </div>
  )
}

export default SelectWasteMenu;
