import { PostModule } from './posts.module';

describe('postModule', () => {
  let postModule: PostModule;

  beforeEach(() => {
    postModule = new PostModule();
  });

  it('should create an instance', () => {
    expect(postModule).toBeTruthy();
  });
});
