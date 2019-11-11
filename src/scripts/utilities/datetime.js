/*
    Purpose:
    Author:
*/

export function createDateTimeToISO() {
    const newDate = new Date()
    return newDate.toISOString()
}

export function convertDateTimeFromISO(date) {
    return new Date(date)
}

// to reverse this use sortElementsByDate(JSON.parse(data), "timestamp").reverse())
export function sortElementsByDate(entriesArr, dbTimeKeyString){
    const sortedEntries = entriesArr.sort((a, b) => {
        return new Date(a[dbTimeKeyString]) - new Date(b[dbTimeKeyString]);
      });
    return sortedEntries
}