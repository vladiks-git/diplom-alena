import dayjs, { Dayjs } from 'dayjs';

export const getFormattedDate = (date: Dayjs) => {
    if (!date) return '';
    return dayjs(date).format('DD-MM-YYYY');
};
