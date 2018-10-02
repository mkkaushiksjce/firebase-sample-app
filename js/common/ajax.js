var ajax = function(type, url, params){

    if(type == 'GET'){
        params = null;
    }

    return $.ajax({
        url : url,
        type : type,
        params : params,
        dataType : 'json',
        contentType : 'application/json',
        success : function(){
            // success call back
            console.log('success');
        },
        error : function(){
            // failure call back
            console.log('errro');
        }
    });
}