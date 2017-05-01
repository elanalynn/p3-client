import { IllustrationsModule } from './illustrations.module';

describe('IllustrationsModule', () => {
  let illustrationsModule: IllustrationsModule;

  beforeEach(() => {
    illustrationsModule = new IllustrationsModule();
  });

  it('should create an instance', () => {
    expect(illustrationsModule).toBeTruthy();
  });
});
