import DI from './Injector';

@DI.injectable
export default class SmthService implements IService {

    public request(): void {
        console.log('Smth service called');
    }
}