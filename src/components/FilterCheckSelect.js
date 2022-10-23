import { React, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LANG_LIST = ["C#", "C++", "Java", "Python", "Javascript"]; // static plan list
const [selectedLang, setSelectedLang] = useState(LANG_LIST);   // state management for dropdown "Select Plan" filter
    


function FilterCheckSelect(){
    return(
        <div>
            <Checkbox {...label} />

        </div>
    );
}

export default FilterCheckSelect;