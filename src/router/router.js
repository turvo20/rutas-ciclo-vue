import { createRouter, createWebHashHistory } from "vue-router";
import isAutenticatedGuard from "./Auth.guard";


const routes = [
 
  {
    path: "/pokemon",
    name:'Pokemon',
    component: () =>
      import(
        /* webpackChunkName: "pokemonLayout"*/ 
        "../modules/pokemon/layouts/PokemonLayout.vue"
      ),
      children:[
        {
          path: "",
          name: "pokemon-home",
          component: () =>
            import(
              /* webpackChunkName: "ListPage"*/ 
              "../modules/pokemon/pages/ListPage.vue"
            ),
        },
        {
          path: "pokemonid/:id",
          name:'pokemon-id',
          component: () =>
            import(
              /* webpackChunkName: "pokemonPage"*/
              "../modules/pokemon/pages/PokemonPages.vue"
            ),
            props: (route) =>{
              const id = Number(route.params.id)
              return isNaN(id) ? {id:1} : {id}
            }
        },
        {
          path: "about",
          name: "pokemon-about",
          component: () =>
            import(
              /* webpackChunkName: "AboutPage"*/ 
              "../modules/pokemon/pages/AboutPage.vue"
            ),
        },
        {
          path: '',
          redirect:{ name:'pokemon-home'}
      
        },
      ]
  },
  {
    path: "/dbz",
    name:'dbz',
    beforeEnter:[isAutenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "dbzLayout"*/ 
        "../modules/dbz/layouts/DbzLayout.vue"
      ),
      children:[
        {
          path: "",
          name: "dbz-home",
          component: () =>
            import(
              /* webpackChunkName: "ListPage"*/ 
              "../modules/dbz/pages/CharactersPage.vue"
            ),
        },

        {
          path: "about",
          name: "dbz-about",
          component: () =>
            import(
              /* webpackChunkName: "AboutPage"*/ 
              "../modules/dbz/pages/AboutPage.vue"
            ),
        },
        {
          path: '',
          redirect:{ name:'dbz-home'}
      
        },
      ]
  },
 
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NotPageFounPage"*/ 
        "../modules/shared/pages/NotPageFount.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
 
//   const random =Math.random() * 100;
//   if (random > 50) {
//     console.log('autenticate')
//     next()
//   }else{
//     console.log(random,' randomly  chosen to be random ')
//     next({name:'pokemon-home'})
//   }

// })

// const canAccess=(to, from, next) => {
//   return new Promise((resolve) => {
//     const random =Math.random() * 100;
//     if (random > 50) {
//       console.log('autenticate')
//       resolve(true)
//     }else{
//       console.log(random,' randomly  chosen to be random ')
//       next(false)
//     }
//   })


// }

// router.beforeEach(async (to, from, next) => {
//   const autorize = await canAccess()

//   autorize 
//         ? next()
//         : next({name:'pokemon-home'})
// })

export default router;
