
    /*methods:{
        {
        for(var a = 0; a < database.username.number; a++)
        if(username1 === database){
            console.log("Username used")
        }
        */

        var vueinst = new Vue({
            el: '#app',
            data: {
                email1: '',
                username1: '',
                password1: '',
                conpassword1: '',
            },
            methods: {
                Check(){
                    if(this.password1 != this.conpassword1){
                        alert("Password Mismatch, Check it carefully :)");
                        }
                    else if(this.email1 == ''){
                        alert("Email can not be empty.");
                    }
                    else if(this.username1 == ''){
                        alert("Username can not be empty.");
                    }
                    else if(this.password1 == '' || this.conpassword1 == ''){
                        alert("Password can not be empty.");
                    }
                    else{
                        this.$refs.signup.style.display = "none";
                        this.$refs.result.style.display = "block";
                    }
                }
            }
        })