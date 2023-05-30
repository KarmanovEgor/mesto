export default class UserInfo {
  constructor(config){
    this._profileName = document.querySelector(config.profileNameSel);
    this._profileJob = document.querySelector(config.profileJobSel);

  }
  getUserInfo(){
    return{
      profilename: this._profileName.textContent,
      job: this._profileJob.textContent
  }
}
setUserInfo(objUser){
  this._profileName.textContent = objUser.profilename;
  this._profileJob.textContent = objUser.job;

}
}
