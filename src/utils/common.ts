import dayjs, { Dayjs } from 'dayjs';

export const getFormattedDate = (date: Dayjs | null) => {
    if (!date) return '';
    return dayjs(date).format('DD-MM-YYYY');
};
