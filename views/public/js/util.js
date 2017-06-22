define(function () {
    var obj = {
        queryString: function () {
            var tcId = location.search.slice(1);
            var tcIdArr = tcId.split('=');
            // console.log(tcIdArr);
            var obj = {};
            for (var i = 0; i < tcIdArr.length; i++) {
                obj[tcIdArr[0]] = tcIdArr[1];
            }
            return obj;
        } 
    }
    return obj;  
})