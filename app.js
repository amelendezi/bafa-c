requirejs.config({
    baseUrl: 'lib',
    paths: {
        jquery: 'jquery',
        app: '../app'
    }
});
requirejs(['app/main']);
