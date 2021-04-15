import Chart from 'chart.js/auto';


new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    responsive: true,
    data: {
        labels: ['Oriente', "Asia", "Europe", "Latin America", "North America"],
        datasets: [
            {
                label: "Participação(%)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [10, 20, 20, 20, 20]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Participação dos usuários'
        }
    }
});

