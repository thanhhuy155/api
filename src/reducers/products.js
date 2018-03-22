var initialState = [
    {
        id: 1,
        name: "Ip 6",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Ip 6",
        price: 500,
        status: true
    },
    {
        id: 3,
        name: "Ip 6",
        price: 700,
        status: false
    },
];

const products = (state = initialState,action) => {
    switch(action.type){
        default: return[...state]
    }
}
export default products;