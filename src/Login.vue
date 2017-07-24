<style scoped src='./styles/Login.css'></style>

<template>

    <div class='login'>
        
        <div class='container'>      
    
                <img class='logo' src='./assets/logo.png'>
    
                <div class='form-group'>  
<!--
                    
                    <i class="fa fa-user" aria-hidden="true"></i>
-->
                    <input v-model='username' class='input1 form-control' type='text' placeholder="Username">

                    <span><svg 
                         xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="NaN%" height="NaN%">
                        <path fill-rule="evenodd"  fill="rgb(204, 204, 204)"
                         d="M13.000,18.000 L1.000,18.000 C0.400,18.000 0.000,17.600 0.000,17.000 L0.000,8.000 C0.000,7.400 0.400,7.000 1.000,7.000 L3.000,7.000 L3.000,4.000 C3.000,1.800 4.800,0.000 7.000,0.000 C9.200,0.000 11.000,1.800 11.000,4.000 L11.000,7.000 L13.000,7.000 C13.600,7.000 14.000,7.400 14.000,8.000 L14.000,17.000 C14.000,17.600 13.600,18.000 13.000,18.000 ZM6.000,14.000 C6.000,14.552 6.448,15.000 7.000,15.000 C7.552,15.000 8.000,14.552 8.000,14.000 L8.000,11.000 C8.000,10.448 7.552,10.000 7.000,10.000 C6.448,10.000 6.000,10.448 6.000,11.000 L6.000,14.000 ZM9.000,4.000 C9.000,2.900 8.100,2.000 7.000,2.000 C5.900,2.000 5.000,2.900 5.000,4.000 L5.000,7.000 L9.000,7.000 L9.000,4.000 Z"/>
                        </svg></span>
                    <input v-model='password' class='input2 form-control' type='password' placeholder="Password">
                    
                    <button class='log-in btn' @click='login' >Log in</button>
                
                 </div>
                    
        </div>

    </div>

</template>
<script>
export default{
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods: {
        login() {
            this.$http.post('http://playground.tesonet.lt/v1/tokens',{
                username: this.username,
                password: this.password
            }).then(function (response) {
                this.$router.push('/servers');
                const token = response.data.token;
                localStorage.setItem('token',token);
            }, function(response) {
                    this.$router.push('/');
                    alert('Wrong Username or Password');
                })
        }
    }
}

</script>
