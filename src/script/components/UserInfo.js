export default class UserInfo {
  constructor(config) {
    this._profileName = document.querySelector(config.profileNameSel);
    this._profileJob = document.querySelector(config.profileJobSel);
    this._profileAva = document.querySelector(config.profileAvatar);

  }
  getUserInfo() {
    return {
      profilename: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }
  setUserInfo({profilename, job, avatar}) {
    this._profileName.textContent = profilename;
    this._profileJob.textContent = job;
    this._profileAva.src = avatar;

  }
}
