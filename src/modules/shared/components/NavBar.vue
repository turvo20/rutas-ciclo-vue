<template>
    <div>
        <!-- <router-link :to="{name:'home'}">Pokemon List</router-link>
        <router-link :to="{name:'pokemon-id', params:{id:1}}">Pokemon por Id</router-link>
        <router-link :to="{name:'about'}">About</router-link>
 -->
    <custom-link
        v-for="link in links"
        :key="link.to"
        :link="link"
    />
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
            links:[
                {to:'pokemon-home',name:'home'},
                {to:'pokemon-id',name:'pokemon-id',id:50},
                {to:'pokemon-about',name:'about'},
                {to:'dbz-home',name:'Personajes-DBZ'},
                {to:'dbz-about',name:'dbz-about'},
                {to:'https://google.com',name:'Google'},

            ]
        }
    },
    components:{
        CustomLink:defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style  scoped>
div{
    padding: 0 30px;
}
div a {
    font-weight: bold;
    text-decoration: none   ;
    margin: 10px;
    color:#23445D ;
    
}
/* a.router-link-exact-active{
    color: #42b984;
} */
</style>