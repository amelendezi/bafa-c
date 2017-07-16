export class requestConfig {
    
    /**
     * Constructs a requestConfig
     * @param {*} url : complete request url
     * @param {*} method : GET / POST
     * @param {*} callback : callback function with response data
     */
    constructor(url, method, callback) {
        this.requestUrl = url;
        this.method = method;
        this.callback = callback;
    }
}