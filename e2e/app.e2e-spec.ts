import { TestingAngular2DatabindingPage } from './app.po';

describe('testing-angular2-databinding App', () => {
  let page: TestingAngular2DatabindingPage;

  beforeEach(() => {
    page = new TestingAngular2DatabindingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
