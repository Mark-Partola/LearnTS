import DI from './Injector';

export default class Model {

    @DI.inject
    private smthService: IService;

    public testService(): void {
        this.smthService.request();
    }
}