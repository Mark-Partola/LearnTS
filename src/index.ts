interface IService {
    request(): void;
}

class DI {

    private static registered: IService[] = [];

    public static injectable(target: any): void {
        DI.registered.push(target);
        console.log(`Register: ${target.name}`);
    }

    public static inject(target: any, key: string) {
        let serviceName = key[0].toUpperCase() + key.slice(1);

        for (let i = 0; i < DI.registered.length; i++) {
            if (serviceName === (<any>DI.registered[i]).name) {
                let prop = target[key];
                let instance = DI.registered[i];

                Object.defineProperty(target, key, <PropertyDescriptor>{
                    get: (): typeof prop => instance
                });

                break;
            }
        }
    }
}

@DI.injectable
class SmthService implements IService {
    public request(): void {
        console.log('Smth service called');
    }
}

class Model {

    @DI.inject
    //WTF???
    private smthService: {new(), request()};

    public testService(): void {
        (new this.smthService).request();
    }
}

new Model().testService();
