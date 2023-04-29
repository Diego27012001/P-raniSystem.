import moment from 'moment';

export function getDate(): string {
  return moment().format('MM/DD/YYYY');
}

export function getTime(): string {
  return moment().format('HH:mm');
}

export function getTimeExtra(horaEntrada: string, horaIngreso: string): string {
  const format = 'hh:mm';
  const horaEntradaMoment = moment(horaEntrada, format);
  const horaIngresoMoment = moment(horaIngreso, format);
  const duracion = moment.duration(horaIngresoMoment.diff(horaEntradaMoment));
  const timeExtra = duracion.hours()+ ":"+duracion.minutes();
  return timeExtra;
}

export function getStateTime(horaEntrada: string, horaIngreso: string): string {
  const format = 'HH:mm';
  const horaEntradaMoment = moment(horaEntrada, format);
  const horaIngresoMoment = moment(horaIngreso, format);
  const duracion = moment.duration(horaIngresoMoment.diff(horaEntradaMoment));
  const minutosExtra = duracion.asMinutes() - 10;

  return minutosExtra > 0 ? 'T' : 'A';
}



