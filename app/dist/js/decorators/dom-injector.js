export function domInjector(seletor) {
    return function (target, propertyKey) {
        let element = null;
        function getter() {
            return (element !== null && element !== void 0 ? element : (element = document.querySelector(seletor)));
        }
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map