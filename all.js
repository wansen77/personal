$(document).ready(function () {
    $('.animal').click(function (event) {
        event.preventDefault();
        $('.wrap-nor').addClass('d-none')
        $('.wrap-ani').removeClass('d-none')
    });

});




// 圖表
var ctx = document.getElementById('myChartPolarArea').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['photo', 'Illustrator', 'Audition', 'Premiere', 'Lightroom', 'OBS', 'Arctime', 'Google/FB 廣告管理員'],
        datasets: [{
            label: '# of Votes',
            data: [70, 70, 60, 60, 50, 50, 60, 60],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



var ctx = document.getElementById('myChartRadar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HTML', 'CSS', 'JS/JQ', 'Bootstrap', 'Vue', 'Git&Github', 'Pyphon', 'PHP+mySQL'],
        datasets: [{
            label: 'skill of code',
            data: [80, 70, 60, 70, 60, 80, 40, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
