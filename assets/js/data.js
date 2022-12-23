// Gender Distribution Data
var data_hesitant = {
    labels: ['57% Males', '43% Females'],
    datasets: [{
        label: 'Hasitant Shoppers',
        data: [66, 44],
        backgroundColor: [
            '#657cfa',
            '#DA99FF'
        ]
    }]
};


// Age Distirbution Data

var data_age_bar = {
    labels: ['18-24', '25-34', '35-44', '44-55','55-64'],
    datasets: [
        {
            label: 'Female',
            backgroundColor: '#d58bff',
            data: [10,60,70,30,15]
        },
        {
            label: 'Male',
            backgroundColor: '#566ff4',
            data: [30,70,75,40,20]
        }
    ]
};

var data_age_bar1 = {
    labels: ['18-24', '25-34', '35-44', '44-55','55-64'],
    datasets: [
        {
            label: 'Female',
            backgroundColor: '#d58bff',
            data: [10,60,70,30,15]
        },
        {
            label: 'Male',
            backgroundColor: '#566ff4',
            data: [30,70,75,40,20]
        }
    ]
};

// IFR Data
var data_ifr_c_a_line_area_chart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'IFR',
            fill: false,
            backgroundColor: 'rgb(213,139,255,0.6)',
            borderColor: '#d58bff',
            borderWidth: 4,
            data: [30,50,40,30,25,50,70,80,60,70,80,75],
            fill: true
        }
    ]
};


// Lead Alternatives

var data_lead_alternative_bar_chart = {
    labels: ['Product','Product','Product','Product'],
    datasets: [
        {
            label: 'Product',
            backgroundColor: 'rgba(208,124,255,0.7)',
            data: [100,60,40,20]
        }
    ]
};


// Conversion Rate / Interact without purchasing / Interact Purchase competitors line area Chart
var data_converstion_interact_line_area_chart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Conversion Rate A',
            fill: false,
            borderColor: '#d58bff',
            borderWidth: 4,
            data: [30,50,40,30,25,50,70,80,60,70,80,75]
        },
        {
            label: 'Conversion Rate B',
            fill: false,
            borderColor: '#526bf2',
            borderWidth: 4,
            data: [30,84,35,51,49,33,89,59,45,66,40,20]
        }
    ]
};

//Decisive and hesitant line chart curve
var data_decisive_hesitant_line_chart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Hesitant Shoppers',
            fill: false,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: '#d58bff',
            borderWidth: 4,
            data: [30,50,40,30,25,50,70,80,60,70,80,75]
        },
        {
            label: 'Decisive Shoppers',
            fill: false,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: '#566ff4',
            borderWidth: 4,
            data: [60,50,30,40,60,50,20,10,15,20,40,35]
        }
    ]
};

//Hesitant customers data bar graph
var data_hesitant_bar = {
    labels: ['Avg Visit Duration', 'Time to decision'],
    datasets: [
        {
            label: 'Female',
            backgroundColor: '#d58bff',
            data: [100,110]
        },
        {
            label: 'Male',
            backgroundColor: '#566ff4',
            data: [90,90]
        }
    ]
};


// Decision type doughnut chart
var data_decision_type_doughnut_chart = {
    labels: ['Hesitant', 'Decisive'],
    datasets: [{
        label: 'Decision Types',
        data: [25, 75],
        backgroundColor: [
            '#657cfa',
            '#e1e5fe'
        ]
    }]
};


// Hasitant Shoppers 
var data_hasitant_shoppers_chart = {
    // labels: ['Hesitant', 'Decisive'],
    datasets: [{
        label: 'Decision Types',
        data: [46, 44],
        backgroundColor: [
            '#657cfa',
            '#e1e5fe'
        ]
    }]
};



// Decisive Shoppers
var data_decisive_shoppers_chart = {
    // labels: ['Hesitant', 'Decisive'],
    datasets: [{
        label: 'Decision Types',
        data: [29, 69],
        backgroundColor: [
            '#657cfa',
            '#e1e5fe'
        ]
    }]
};


//Wide bar chart
var data_wide_bar_chart = {
    labels: ['Total Entered Category','Total Shop Category','Total Interacted with category','Total Interacted with product','Total Purchased Product'],
    datasets: [
        {
            label: 'Wide Bar',
            backgroundColor: '#c0cafd',
            borderColor: '#adb5e6',
            // borderWidth: 5,
            data: [100,70,35,9,6],
            borderRadius: [0,20,0,0],
            borderSkipped: false
        }
    ]
};
