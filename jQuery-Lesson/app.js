// $(function(){
//     $('.box1').css({
//         'background-color': '#0000FF',
//         'height': '100px'
//     });
// });
// $(function(){
//     $('.box1').mouseover(function(){
//         $('.box1').addClass('box1-ext');
//     });
//     $('.box1').mouseout(function(){
//     	$('.box1').removeClass('box1-ext');
//     });
// });
$(function(){
    $('.box1').on('click', function(){
        $('.box1').addClass('box1-ext');
    });
 
    $('.box1').mouseout(function(){
        $('.box1').removeClass('box1-ext');
    });
 
});
// $(function(){
//   $('.box1').slideDown();
//   $('.box1').slideUp();
// });

// $(function(){
//     $('.box1').show();
//     $('.box1').css({'background-color': '#0000FF'});
// });


// $(function(){
// 	$('.box1').hide();
// // });
// $(function(){
//     $('.box1').slideDown(function() {
//         $('.box1').css({
//             'background-color': '#0000FF',
//             'width': '200px',
//             'height': '100px'
//         }).slideUp(5000);
//     });
// });
// $(function() {
 
//   // 一旦hide()で隠してフェードインさせる
//   $('.box1').show(3000);
 
// });