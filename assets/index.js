const localStorageData = [{
    date: '08.12-2023',
    data: {
        9: 'text at 9AM',
        10: 'text at 10AM',
        11: 'text at 11AM',
        12: 'text at 12PM',
        1: 'text at 1PM',
        2: 'text at 2PM',
        3: 'text at 3PM',
        4: 'text at 4PM',
        5: 'text at 5PM',
       
    },
}]

const today = dayjs().format('DD.MM.YYY');

const todayDataIndex = localStorageData.findIndex(function(element){
    return element.date === today;

});

if (todayDataIndex < 0){
    const todayData = localStorageData[todayDataIndex];
    document.getElementById('time-block-9').value = data9AM;
    document.getElementById('time-block-10').value = data10AM;
    document.getElementById('time-block-11').value = data11AM;
    document.getElementById('time-block-12').value = data12PM;
    document.getElementById('time-block-1').value = data1PM;
    document.getElementById('time-block-2').value = data2PM;
    document.getElementById('time-block-3').value = data3PM;
    document.getElementById('time-block-4').value = data4PM;
    document.getElementById('time-block-5').value = data5PM;
    

};
console.log= todayDataIndex;