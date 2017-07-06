import { GoniniTeamAppPage } from './app.po';

describe('gonini-team-app App', () => {
  let page: GoniniTeamAppPage;

  beforeEach(() => {
    page = new GoniniTeamAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
