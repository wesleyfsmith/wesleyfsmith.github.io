
var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: [ "Linux", "Mobile Apps", "Programming", "Javascript", "C++", "Java", "MySQL", "Python", "NodeJS", "Meteor", "Angular", "React", "Teaching", "MongoDB"],
    datasets: [
        {
            label: "Years of experience",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [ 12, 6, 12, 6, 4, 8, 6, 9, 4, 2, 3, 1, 7, 3],
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        // scales: {
        //     xAxes: [{
        //         stacked: true
        //     }],
        //     yAxes: [{
        //         stacked: false
        //     }]
        // },
        stacked: false
    }
});

// $(document).ready(function() {
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
//
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
//
//                 $(this).animate({'opacity':'1'},500);
//
//             }
//
//         });
