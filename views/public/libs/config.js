/**
 * Created by Administrator on 2017/6/21.
 */
require.config({
  baseUrl:'/views/public',
  paths:{
    'jquery':'assets/jquery/jquery.min',
    'cookie':'assets/jquery-cookie/jquery.cookie',
    'bootstrap':'assets/bootstrap/js/bootstrap.min',
    'template':'assets/artTemplate/template',
    'nprogress':'assets/nprogress/nprogress',
//      'common': 'js/common',
    'common': 'js/dashboard/common',
//      'login':'js/login'
    'login':'js/dashboard/login'
  },
  shim:{
    'bootstrap':{
      deps:['jquery']
    }
  }
})
