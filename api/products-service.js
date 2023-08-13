const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

class ProductsService {

    static _instance = null;

    wooCommerceRestApi = null;

    constructor(config) {
        this.wooCommerceRestApi = new WooCommerceRestApi({
            url: config.url,
            consumerKey: config.consumerKey,
            consumerSecret: config.consumerSecret,
            version: 'wc/v3'
          });
    }

    static getInstance(config) {
        if (!this._instance) {
            this._instance = new ProductsService(config);
        }
        return this._instance;
    }

    fetchProducts(params) {
        return this.wooCommerceRestApi.get('products', params).then(response => response.data);
    }

}

module.exports = ProductsService;
