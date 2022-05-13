var vueinst = new Vue({
    el: '#app',
    data:{
        title: '',
        data: '',
        text:'',
        list: [],
    },
    methods: {
        closead(){
            this.$refs.ads.style.display = "none";
        },
        GetEvent(){
            var newlist = {
                title1: "",
                data1: "",
                text1:"",
                posttime1:""};
            newlist.title1 = this.title;
            newlist.data1 = this.data;
            newlist.text1 = this.text;
            newlist.posttime1 = new Date();
            this.list.push(newlist);
        },
       remove:function(index){
            this.list.reverse().splice(index,1);
        }
    }
})

function Students(){
    alert("In development. Gonna work with database");
}

function Showdetail(){
    alert("In development. Gonna work with database");
}

function Announcement(){
    alert("In development. Gonna work with database");
}