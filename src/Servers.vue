<style scoped src='./styles/Servers.css'></style>

<template>
    <div>
    
        <hr>
        <div class='row'>
            
                <div class='info col-xs-6'>Server</div>
                <div class='info right col-xs-6'>Distance</div>
            
        </div>
        <hr>
        
        <div v-for='server in servers' class='container-fluid'>
            
            <div class='row'>
                 <div class='col-xs-6'>{{server.name}}</div>
                 <div class='right col-xs-6'>{{server.distance}}</div>
                 <hr>
                
            </div>
            
        </div>
        
    <button class='btn' @click='logOut'>Log Out</button>  
        
    </div>
   
</template>

<script>

    export default {

        data() {
            return {
                servers: []
            }
        },
        created() {
            this.$http.get('http://playground.tesonet.lt/v1/servers',{
                headers: {
                    'Authorization': localStorage.getItem('token')
                         }
            }).then(function(data){
                this.servers = data.body.slice();
            })
        },
        methods: {
            logOut() {
                this.$router.push('/');
            }
        }
    }


</script>