define(['jquery'],function($){
    $('.btnAdd').on('click',function(){
        var dataAdd=$('#formAdd').serializeArray();
        // if(dataAdd[3].value=="讲师"){
        //     dataAdd[3].value=0;
        // }
        // else{
        //     dataAdd[3].value=1;
        // }
        // if(dataAdd[4].value=="男"){
        //     dataAdd[4].value=0;
        // }
        // else{
        //     dataAdd[4].value=1;
        // }
       console.log(dataAdd);
       
        dataAdd[3].value=dataAdd[3].value=="讲师"?0:1;
        dataAdd[4].value=$('input[type="radio"]')[0].checked?0:1;
        // dataAdd[4].value=dataAdd[4].value=="on"?0:1;
         console.log(dataAdd[4])
        $.ajax({
            url:'/api/teacher/add',
            type:'post',
            data:dataAdd,
            success:function(data){
                if(data.code==200){
                    // window.location.href='/teacher/list';
                }
            }
        })
       return false;  
    })
})