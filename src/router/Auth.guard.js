const isAutenticatedGuard = (to, from,next) =>{
    return new Promise((resolve) => {
            const random =Math.random() * 100;
            if (random > 50) {
              console.log('autenticate')
              next()
            }else{
              console.log(random,' randomly  chosen to be random ')
              next({name:'pokemon-home'})
            }
          })
}



export default isAutenticatedGuard;