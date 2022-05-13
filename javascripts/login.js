
var vueinst = new Vue({
    el: '#app',
    data:{
        username2: '',
        password2: '',
        
    },
    methods: {
        login(){
            if(this.username2 == ''){
                alert("Username can not be empty.");
            }
            else if(this.password2 == ''){
                alert("Password can not be empty.");
            }
            else{
                window.open('idmain.html');
            }
        }
    }
})
