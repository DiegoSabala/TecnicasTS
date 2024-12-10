export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const OriginalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const returnOfOriginalMethod = OriginalMethod.apply(this, args);
      const t2 = performance.now();
      emSegundos
        ? console.log(
            `tempo de execução de ${propertyKey}: ${(t2 - t1) / 10000}`
          )
        : console.log(`tempo de execução de ${propertyKey}: ${(t2 - t1) / 1}`);
      return returnOfOriginalMethod;
    };

    return descriptor;
  };
}
