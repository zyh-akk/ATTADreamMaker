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
            console.log(JSON.parse(data));
            resolve(JSON.parse(data))
        }); 
    })
}
// 获取用户名称
export function getUserInfo() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            let uesrNameDom = document.querySelector('[aria-label="Account menu"][data-testid="SideNav_AccountSwitcher_Button"]').childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[0];
            let uesrName = uesrNameDom.textContent;
            console.log(uesrName);
            resolve(uesrName.slice(1))
        }, 1000);
    })
}
