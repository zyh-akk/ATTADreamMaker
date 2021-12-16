import OAuth from "oauth";
const userToken = '1385945756394160128-cTYnKD97k39Ml6WzDNweIPgvR8ik7z';
const userSecret = 'GQYmlhQoAdDWS24btiatVxpK1OraluzuwRyucWo6BtvIO';
const consumerKey = 'MkGh5S5rTmisQXMiagQt5Mxfs';
const secretKey = '8BSJ7BTYt7VJbV9PZpKiutnjxcTQf3xC1SIOboYMWg7T4lKZd1';
export function twitterInfo(url) {
    console.log(userToken);
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