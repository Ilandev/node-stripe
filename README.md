## Install

npm install node-stripe --save

## init

To begin any stripe transactions or services using this module, We need to init 
```javascript
    var stripe=require('node-stripe');
 stripe.init({key:secret key},function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
		console.log(result);
		});
		
		
```
## Creating Charges


```javascript
    var stripe=require('node-stripe');
 stripe.init({key:secret key},function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
		stripe.charges({
        amount: 1500, // Amount in cents
            currency: "usd",
            customer: CustomerID // Previously stored, then retrieved)
		});
		
		}
		});
		
```

## Customers

```javascript
var stripe=require('../module/experiement');
    stripe.init({key:'sk_test_2kSmiYiONir5vpPRvby1RoJg'},function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
            stripe.customers().listAll( function(err, customer) {
                // asynchronously called
                if(err)
                {
                    res.send(err);
                    res.end();
                    return false;
                }
                else
                {
                    res.send(customer)
                    res.end();
                    return false;
                }
            });
        }

    });
```	
		
