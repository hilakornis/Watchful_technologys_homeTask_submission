Java.perform(function() {
    var prefClass = Java.use('z7t');

    prefClass.b.implementation = function(str_x, boolean_y) {       
        var string_class = Java.use("java.lang.String");
        var my_string = string_class.$new(str_x); //creating a new String by using `new` operator 
        
        var ret = this.b(str_x, boolean_y); 
           

        if(my_string.indexOf("voting") > 0 ){
            
            // console.log("In function b of z7t" 
            // + "arguments: "  + my_string + " boolean_y : " + boolean_y);  
            
            // send(ret);
            // console.log("Return value: " + ret);

            return true;
        }
         return ret;
        
    }
   

});