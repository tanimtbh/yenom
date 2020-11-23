const state ={
    itemlist:{
        ID1:{
          id: 1,
          name:'Fuck Burger',
          picture:'https://cdn.quasar.dev/img/parallax2.jpg',
          price: 666,
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          sale: false,
        },
        ID2:{
            id: 2,
            name:'Hypocrete Burger',
            picture:'https://cdn.quasar.dev/img/parallax2.jpg',
            price: 662,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor or Short whatever you want',
            sale: false,
        },
        ID3:{
            id: 3,
            name:'Fuck meat',
            picture:'https://cdn.quasar.dev/img/parallax2.jpg',
            price: 663,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            sale: false,
        },
        ID4:{
            id: 4,
            name:'Pig Burger',
            picture:'https://cdn.quasar.dev/img/parallax2.jpg',
            price: 664,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            sale: false,
        },
        ID5:{
            id: 5,
            name:'Yoyo pizza',
            picture:'https://cdn.quasar.dev/img/parallax2.jpg',
            price: 665,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            sale: false,
        },
        ID6:{
            id: 6,
            name:'Capitalist pizza',
            picture:'https://cdn.quasar.dev/img/parallax2.jpg',
            price: 666,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            sale: false,
        },
        ID7:{
            id: 7,
            name:'Fake Spiritual Pizza',
            picture:'https://cdn.quasar.dev/img/parallax2.jpg',
            price: 665,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            sale: false,
        },
    },
    cart:[],

}

const mutations={
    addToCart(state, payload){
           //console.log('From Mitation: ', payload)
           let productINcarT=state.cart.find(item=>{
               return item.name==payload.name
           })
          if(productINcarT){
             productINcarT.qnts+=payload.qnts;
             return;
          }
          state.cart.push(payload)
         
           
    },
    qntChange(state, {payload}){
        //console.log('From Mitation: ', payload)
        let productINcarT=state.cart.find(item=>{
            return item.name==payload.name
        })
       if(productINcarT){
          productINcarT.qnts=payload.qnts;
          return;
       }
      
        
 }
}
const actions={
    addToCart({commit}, payload){
       // console.log(payload)
       commit('addToCart', payload)
    },
    qntChange({commit}, payload){

    }

}

const getters={
    itemlist: (state)=>{
          return state.itemlist
    },
    cart: (state)=>{
        return state.cart
  },
  
  totalCart: (state)=>{
    let total=0;
    state.cart.forEach(item => {
        total+=item.qnts
    });
    return total;
},
totalPrice: (state)=>{
    let total=0;
    state.cart.forEach(item => {
        total+=item.price*item.qnts
    });
    return total;

}


}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}