export default class UserInfo {
  constructor(config){
    this._prfileName = document.querySelector(config.prfileNameSelector);
    this._profileJob = document.querySelector(config.profileJob);
  }
  getUserInfo(){
    return{
      profilename: this._prfileName.textContent,
      job: this._profileJob.textContent
  }
}
setUserInfo(objUser){
  this._prfileName.textContent = objUser.profilename;
  this._profileJob.textContent = objUser.job;
}
}
