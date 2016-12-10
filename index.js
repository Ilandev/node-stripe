
var request=require('request');
var key='';
var path='https://api.stripe.com/v1/';

exports.init=function(obj,cb)
{
    if(typeof obj == 'object' && obj.key != '')
    {
        key=obj.key;
        cb(0,key);
    }
    else
    {
        cb(1,'invalid');
    }
}

exports.charges=function(obj,func,cb)
{
    console.log(obj);
    console.log(key);

    return {
        create:function(cb)
        {
            var temppath=path+'charges';
            console.log(temppath);
            request(temppath,{auth:{username:key},form:obj,method:'POST'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        retrieve:function(cb)
        {
            var temppath=path+'charges/'+obj;
            console.log(temppath);
            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        }
    }
}
exports.balance=function(obj)
{
if(typeof(obj)=='undefined')
{
    obj='';
}
    return {
        retrieve:function(cb)
        {
            var temppath=path+'balance';

            request(temppath,{auth:{username:key},form:obj,method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        retrieveTransaction:function(cb)
        {
            var temppath=path+'balance';

            request(temppath,{auth:{username:key},form:obj,method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        }
        ,
        listTransaction:function(cb)
        {
            var temppath=path+'balance/history';

            request(temppath,{auth:{username:key},form:obj,method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        }
    }
}

exports.token=function(obj)
{
    return {
        create:function(cb)
        {
            var temppath=path+'/tokens';

            request(temppath,{auth:{username:key},form:obj,method:'POST'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        retrieve:function(cb)
        {
            var temppath=path+'/tokens'+obj;

            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        }
    }
}

exports.customers=function(obj)
{
    return{
        create:function(cb)
        {
            var temppath=path+'customers';

            request(temppath,{auth:{username:key},form:obj,method:'POST'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        retrieve:function(cb)
        {
            var temppath=path+'customers/'+obj;

            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        update:function(data,cb)
        {
            var temppath=path+'customers/'+obj;

            request(temppath,{auth:{username:key},form:data,method:'POST'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        delete:function(cb)
        {
            var temppath=path+'customers/'+obj;

            request(temppath,{auth:{username:key},form:'',method:'delete'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        list:function(cb)
        {
            var temppath=path+'customers/?'+obj;

            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        listAll:function(cb)
        {
            var temppath=path+'customers';

            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        }
    }
}
exports.card=function(obj)
{
    return {
        create:function(cb)
        {
            var temppath=path+'/customers';

            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        }
    }
}
exports.events=function(obj)
{
    return {
        retrieve:function(cb)
        {
            var temppath=path+'events/'+obj;

            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        },
        list:function(cb)
        {
            var temppath=path+'events';

            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        }

    }
}
exports.account=function(obj)
{
    return {
        retrieve:function(cb)
        {
            var temppath=path+'account';

            request(temppath,{auth:{username:key},form:'',method:'GET'},function(err,resp,body){
                if(err)
                {
                    console.log('yes error');
                    console.log(err);
                    cb(err,'error');
                }
                else
                {
                    console.log('got it');
                    console.log(body);
                    cb(null,body);
                }
            });
        }

    }
}