import { AngularReactiveFormDemoPage } from './app.po';

describe('angular-reactive-form-demo App', () => {
  let page: AngularReactiveFormDemoPage;

  beforeEach(() => {
    page = new AngularReactiveFormDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
