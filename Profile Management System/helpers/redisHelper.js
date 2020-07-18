const redis = require('redis');
const redisClient = redis.createClient();

const redisSet = (key, value) => {
    redisClient.set(key,value);
};

const redisGet = (key)=>{
    return new Promise(function(resolve, reject){
        redisClient.get(key, function(err, reply) {
            if(err){
                reject(0)
            }
            else{
                resolve(reply)
            }
        });
    })
};

module.exports={
    set: redisSet,
    get: redisGet
};
