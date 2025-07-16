var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green.jpg",
        // image: "./assets/vmSocks-blue.jpg",
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green'    
            },
            {
                variantId: 2235,
                variantColor: 'blue'
            },
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
    },
})
