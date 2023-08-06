import { useLeafletContext } from '@react-leaflet/core'
import L from "leaflet";
import {useEffect} from "react";

const Legend = () => {
  const context = useLeafletContext();

  const { map } = context;

  useEffect(() => {
    let legend: L.Control | null = null;

    if (map) {
      legend = new L.Control({ position: 'topright' });

      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'legend');
        div.innerHTML = `
          <div class="px-5 rounded-[1rem] py-4 bg-white flex flex-col gap-3">
            <div class="flex gap-2 items-center">
              <div>
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00"></path></g></svg>
              </div>
              <span class="font-bold">Pengepul Limbah</span>
            </div>
            <div class="flex gap-2 items-center">
              <div>
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#3d57d6"></path></g></svg>              
              </div>
              <span class="font-bold">Pembeli Limbah</span>
            </div>
          </div>
        `;

        return div;
      };

      legend.addTo(map);
    }

    return () => {
      if (map && legend) {
        map.removeControl(legend);
      }
    };
  }, [map]);
  return null;
};

export default Legend;
