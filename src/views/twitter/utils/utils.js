import OAuth from "oauth";
const userToken = '1385945756394160128-cTYnKD97k39Ml6WzDNweIPgvR8ik7z';
const userSecret = 'GQYmlhQoAdDWS24btiatVxpK1OraluzuwRyucWo6BtvIO';
const consumerKey = 'MkGh5S5rTmisQXMiagQt5Mxfs';
const secretKey = '8BSJ7BTYt7VJbV9PZpKiutnjxcTQf3xC1SIOboYMWg7T4lKZd1';
// 调用推特api
export function twitterInfo(url) {
    return new Promise((resolve, reject) => {
        var oauth = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        consumerKey,
        secretKey,
        '1.0A',
        null,
        'HMAC-SHA1'
        );
        oauth.get(
        url,
        userToken, //test user token
        userSecret, //test user secret
        function (e, data, res){
            resolve(JSON.parse(data))
        });
    })
}
// 获取用户名称
export function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let uesrNameDom = document.querySelector('[role="link"][data-testid="AppTabBar_Profile_Link"]');
            let uesrName = uesrNameDom.href.split('https://twitter.com/')[1];
            resolve(uesrName)
        }, 1000);
    })
}
// 获取当前好友信息
export function getFriendUserInfo() {
    return new Promise((resolve, reject) => {
        let SwipeableList = document.querySelector('[data-testid="ScrollSnap-SwipeableList"]');
        if(!SwipeableList){//如果页面没有这个dom说明不是好友页面
            reject({data:null});
        }else{
            let userUrl = window.location.pathname;//获取连接后的参数
            let userName = userUrl.split('/');
            // if(userName.length>2){//大于2说明有多个参数，不属于好友信息
            //     reject();
            // }else{
                twitterInfo(`https://api.twitter.com/2/users/by/username/${userName[1]}`)
                .then(res=>{
                    if(res.errors){
                        reject();
                    }else{
                        resolve(res.data);
                    }
                })
            // }
        }
    })
}
// 根据id获取当前人信息
export function getUserInfoid(id) {
    return new Promise((resolve, reject) => {
        twitterInfo(`https://api.twitter.com/2/users/${id}`)
        .then(res=>{
            if(res.errors){
                reject();
            }else{
                resolve(res.data);
            }
        })
    })
}
