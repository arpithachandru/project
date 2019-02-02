
$(document).ready(function(){

$('form[id="form_val"]').validate({
rules:{
name: "required",
password: {
required: true,

}
},
messages:{
name:"Please provide the valid name",
password:{
required: "Please provide the valid password",

}
},
submitHandler:function(form){
form.submit();
}
});
});