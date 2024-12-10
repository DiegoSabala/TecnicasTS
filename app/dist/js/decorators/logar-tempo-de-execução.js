export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const OriginalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const returnOfOriginalMethod = OriginalMethod.apply(this, args);
            const t2 = performance.now();
            emSegundos
                ? console.log(`tempo de execução de ${propertyKey}: ${(t2 - t1) / 10000}`)
                : console.log(`tempo de execução de ${propertyKey}: ${(t2 - t1) / 1}`);
            return returnOfOriginalMethod;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execu%C3%A7%C3%A3o.js.map