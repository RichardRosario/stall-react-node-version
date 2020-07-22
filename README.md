# Stall eCommerce

## My first attempt to create an ecommerce system from scratch...

### Stall eCommerce is an open source simple full-feature ecommerce created in reactjs and nodejs. This will be consistently improved in the future to allow other developers to build modules and extensions.

### Tasks to cover:

#### Create React Products Component

      1. Create data.json {products:[{_id, title, ...}]
      2. Update App.js to import data.json
      3. div.content {flex, wrap}
      4. div.main {flex: 3 60rem}
      5. div.sidebar {flex: 1 20rem;}
      6. Create components/Products.js component
      7. Add it to div.main in App.js and set products props
      8. ul.products {flex,center, center,warp, p:0,m:0, style:none}
      9. this.props.products.map(p => li.key={p.\_id} {flex, p:1, m:1, none,h:47}
      10. div.product { flex, column, space-between, h:100%}
      11. a href="#" > img {max-width, max-height:37} + p {p.title}
      12. div.product-price > div.product.price + button.button.primary Add to cart
      13. product-price {flex, space-between, center}
      14. div {p.price} flex: 1; align: center; size: 2rem
      15. button.button.primary Add To Cart

#### Setup node backend and developement dependencies

#### Fetching server data

1. use react Hooks,
2. useEffects()
3. useState()

#### Manage state

1. useState()
2. install redux
3. create store
4. create reducers and action
5. remove axios from homeScreen.js and call it from productActions
6. resolve warning issue about use React Hook useEffect missing dependency

#### implementing add to cart

1. convert product page to redux
2. display quantity onchange handler
3. map the stockCount
4. work on add to cart btn
