import * as types from '../mutation-types'

const state = {
    user:{},
    auth:{},
    // auth_server:''
}

let action = {
    auth({commit},opt) {
        debugger
        let host = localStorage.mc,jwt = localStorage.jwt;
        this.auth_server = require('socket.io-client')(host);
        window.auth_server = this.auth_server;
        this.auth_server.emit('user', { path: '/user/login', body: {jwt:jwt} }, (msg) => {
            console.log('登录成功！',msg);
            if(msg.error){
                this.$message.error({
                    message: msg.error
                });
            }else{
                commit(types.AUTH,msg.body);
            }
        });
    }
}
const mutations = {
    [types.AUTH](state,data){
        state.auth = data;
    }
}

export default {
    state,
    action,
    mutations
}
