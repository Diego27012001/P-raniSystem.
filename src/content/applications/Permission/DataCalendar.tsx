import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import {es} from 'date-fns/locale'
import { format } from 'date-fns';




const isWeekend = (date: Dayjs) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export default function StaticDatePickerLandscape({fecha, setFecha}) {
  
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

  return (
 
    <LocalizationProvider locale={es} sx={{m: 5}} dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          const fechaFormateada = format(newValue.toDate(), 'dd/MM/yyyy');
          setValue(newValue);
          setFecha(fechaFormateada);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    
  );
}