// import { Select, Option } from '@material-tailwind/react';
import { Wastes } from '../services/api';

type SelectWasteMenuProps = {
  selectedWaste?: number;
  wastes?: Wastes[];
  fallbackSelectWaste?: (wasteId: string) => void;
  selectedWasteFilter: string;
}

const SelectWasteMenu = ({ wastes, fallbackSelectWaste, selectedWasteFilter }: SelectWasteMenuProps) => {
  const handleSelectChange = (event: any) => {
    fallbackSelectWaste && fallbackSelectWaste(event.target.value as unknown as string || '');
    return;
  };

  return (
    <div className="w-72 select__menu">
      <div className="px-5 w-full py-2 border-2 rounded-[10px]">
        <select className="w-full bg-transparent focus:outline-0" name="selectwaste" id="selectwast" value={selectedWasteFilter} onChange={handleSelectChange}>
          <option value="" disabled className="disabled:bg-gray-300">Pilih Jenis Limbah</option>
          {
            wastes && wastes.map((waste) => (
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              <option key={waste.id} value={waste.id.toString()}>{waste.name}</option>
            ))
          }
        </select>
      </div>

      {/*<Select*/}
      {/*  label="Pilih Jenis Limbah"*/}
      {/*  value={selectedWasteFilter}*/}
      {/*  onChange={handleSelectChange}*/}
      {/*>*/}
      {/*  <Option value="" className="disabled:bg-gray-500">Pilih Jenis Limbah</Option>*/}
      {/*  {*/}
      {/*    wastes && wastes.map((waste) => (*/}
      {/*      <Option key={waste.id} value={waste.id.toString()}>{waste.name}</Option>*/}
      {/*    ))*/}
      {/*  }*/}
      {/*</Select>*/}
    </div>
  )
}

export default SelectWasteMenu;
