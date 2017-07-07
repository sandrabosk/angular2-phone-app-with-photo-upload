import { PhoneAppPage } from './app.po';

describe('phone-app App', () => {
  let page: PhoneAppPage;

  beforeEach(() => {
    page = new PhoneAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
