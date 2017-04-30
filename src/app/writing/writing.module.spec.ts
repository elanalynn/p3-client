import { WritingModule } from './';

describe('WritingModule', () => {
  let writingModule: WritingModule;

  beforeEach(() => {
    writingModule = new WritingModule();
  });

  it('should create an instance', () => {
    expect(writingModule).toBeTruthy();
  });
});
