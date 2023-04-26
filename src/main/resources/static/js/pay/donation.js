var buskerInfo = $('#buskerInfo');
var url = location.pathname;
var id = url.match(/\d+/)[0];

$.ajax({
    url: '/busking/detail/'+id+'/donation/json',
    dataType: 'json',
    success: function(data) {
        var li = $('<li>');
        console.log(data.name);

        li.append($('<h2>').html(data.name));
        li.append($('<h2>').html(data.nid));

        buskerInfo.append(li);

    //     // 첫 번째 Ajax 호출이 완료된 후에 두 번째 Ajax 호출을 실행
    //     $('#pay').click(function (){
    //         $.ajax({
    //             url:'/smallconcert/detail/'+id+'/calendar/' +day+ '/pay/kakao',
    //             dataType: 'json',
    //             success:function (data){
    //                 var box = data.next_redirect_pc_url;
    //                 window.location.href = box;
    //             },
    //             error:function (error){
    //                 alert(error);
    //             }
    //         });
    //     });
    },
    error: function(xhr, status, error) {
        console.log('AJAX Error: ' + status + error);
    }
});

const price = document.querySelector('#price');
const output = document.querySelector('#output');

const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click',function (){
    price.value = '';
    output.textContent = '금액 : ';
});

const searchButton = document.querySelector("#search-btn");
searchButton.addEventListener('click', function (){
    const priceValue = price.value;
    output.textContent = '금액 : ' + priceValue + '원';
});