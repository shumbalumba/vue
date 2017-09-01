<style scoped src='./styles/Servers.css'></style>

<template>

    <div>
      
        <div class='container-fluid'>
            
            <!-- FIRST ROW WITH LOGO AND LOGOUT -->
            
            <div class='top row'>
    
                <div class='col-xs-6'><img class='logo' src='./assets/logo-dark.png' alt='testio'></div>
                
                <div class='right col-xs-6' >
                    
                    <span class='log-out' @click='logOut'>
                       
                        <!-- UGLY SVG CODE FOR LOGOUT ICON  -->
                       
                        <svg 
                         width="16px" height="16px">

                        <path fill-rule="evenodd"  fill="rgb(47, 50, 84)"
                         d="M15.000,16.000 L6.000,16.000 C5.400,16.000 5.000,15.600 5.000,15.000 L5.000,12.000 L7.000,12.000 L7.000,14.000 L14.000,14.000 L14.000,2.000 L7.000,2.000 L7.000,4.000 L5.000,4.000 L5.000,1.000 C5.000,0.400 5.400,-0.000 6.000,-0.000 L15.000,-0.000 C15.600,-0.000 16.000,0.400 16.000,1.000 L16.000,15.000 C16.000,15.600 15.600,16.000 15.000,16.000 ZM10.000,9.000 L4.000,9.000 L4.000,12.000 L0.000,8.000 L4.000,4.000 L4.000,7.000 L10.000,7.000 L10.000,9.000 Z"/>
                            
                        </svg>
                        
                        Logout
                        
                        </span>
                    
                    </div>
                
            </div>
            
            <!-- SECOND ROW FROM THE TOP WITH CLICKABLE 'SERVER' AND 'DISTANCE' -->
            
            <div class='info-row row'>
            
                <div class='info col-xs-6' @click='alphabetic'>Server</div>
                <div class='info right col-xs-6' @click='distance'>Distance</div>
                
            </div>
            
            <!-- LIST OF SERVERS -->
            
            <div class='list-row row' v-for='server in servers'>
                     
                 <div class='col-xs-6'>{{server.name}}</div>
                 <div class='right col-xs-6'>{{server.distance}} km</div>          
                
            </div>

        </div>
        
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
            },
            alphabetic() {
                function compareName(a,b) {
                    
                    const one = a.name.toUpperCase();
                    const two = b.name.toUpperCase();
                    
                    let compare = 0;
                    if (one > two) {
                        compare = 1;
                    } else if (one < two) {
                        compare = -1;
                    } 
                    return compare;
                }
                this.servers.sort(compareName);
            },
            distance() {
                function compareDistance(a,b) {
                    
                    const one = Number(a.distance);
                    const two = Number(b.distance);
                    
                    let compare = 0;
                    if (one > two) {
                        compare = 1;
                    } else if (one < two) {
                        compare = -1;
                    }
                    return compare;
                }
                this.servers.sort(compareDistance);
            }
        }
    }


</script>
