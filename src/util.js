import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthcount = 0 - firstDayOfMonth;

    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthcount++;
            return dayjs(new Date(year, month, currentMonthcount));
        });
    })

    return daysMatrix;
};