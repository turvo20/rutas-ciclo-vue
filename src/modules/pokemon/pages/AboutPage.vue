<template>
    <div>
            <h1>Page Not Fount</h1>
    </div>
    <hr>
    <h1>{{ name }}</h1>
    <button
    @click="onChangeName()"
    >
        Cambiar nombre
    </button>
</template>

<script>
    export default {
        data(){
            return {
                name:'Rudy Casilla'
            }
        },
        methods:{
            onChangeName(){
                this.name = 'Rudy Perez'
            }
        },
        beforeCreate(){
            console.log('beforeCreate')
        },
        created(){
            console.log('created') 
        },
        beforeMount(){
            console.log('beforeMount')
        },
        mounted(){
            console.log('mounted')
        },
        beforeUpdate(){
            console.log('before update')
        },
        updated(){
            console.log('updated')
        },
        activated(){
            console.log('activated')
        },
        deactivated(){
            console.log('deactivated')
        },
        beforeUnmount(){
            console.log('beforeUnmount')
        },
        unmounted(){
            console.log('unmounted')
        },
        errorCaptured(){
            console.log('errorCaptured')
        },
        renderTracked(){
            console.log('renderTracked')
        },
        renderTriggered(){
            console.log('renderTriggered')
        },
    }
</script>