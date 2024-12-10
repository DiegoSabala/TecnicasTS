export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    let element: HTMLElement | null = null;

    function getter() {
      return (
        element ?? (element = <HTMLElement>document.querySelector(seletor))
      );
    }

    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
