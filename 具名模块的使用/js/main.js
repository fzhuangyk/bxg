require.config({
    baseUrl:'/',
    paths:{
        'a':'具名模块的使用/js/a',
        'b':'具名模块的使用/js/b',
        'jquery':'具名模块的使用/js/jquery/jquery.min',
        'm':'具名模块的使用/js/m'
    },
    shim:{
        'm':{
            exports:'aaa'
        }
    }
})

// require(['a','b','jquery'],function(obj1,obj2,$){
//     console.log($('p'));
// })
require(['m'],function(fn){
    fn();
})