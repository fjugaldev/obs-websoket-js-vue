/*
 * @Author: your name
 * @Date: 2020-07-26 13:51:17
 * @LastEditTime: 2020-07-27 12:28:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \obs\src\store\index.js
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        connecting:false,
        streaming:false,
        recording:false,
        record_paused:false,
        connect_config:{
            address:'127.0.0.1',
            port:4444,
            secret:''
        },
        scenes:[],
        current_scene:'',
        transitions:[],
        current_transition:'',
        transition_duration:0,
        sounds:[]
        
    },
    getters: {
    },
    mutations: {
        connecting:(state,boolVal) =>state.connecting = boolVal,
        streaming:(state,boolVal)=>state.streaming = boolVal,
        recording:(state,boolVal)=>state.recording = boolVal,
        record_paused:(state,boolVal)=>state.record_paused = boolVal,
        scenes:(state,arrayVal)=>state.scenes = JSON.parse(JSON.stringify(arrayVal)),
        current_scene:(state,strVal)=>state.current_scene = strVal,
        transitions:(state,arrayVal)=>state.transitions = arrayVal,
        current_transition:(state,strVal)=>state.current_transition = strVal,
        transition_duration:(state,numberVal)=>state.transition_duration = numberVal,
        sounds:(state,arrayVal)=>state.sounds = JSON.parse(JSON.stringify(arrayVal)),
        connect_config:(state,jsonVal)=>state.connectConfig = JSON.parse(JSON.stringify(jsonVal)),
    },
    actions: {
        connecting:(context,boolVal) =>context.commit("connecting",boolVal),
        streaming:(context,boolVal) =>context.commit("streaming",boolVal),
        recording :(context,boolVal) =>context.commit("recording",boolVal),
        record_paused :(context,boolVal) =>context.commit("record_paused",boolVal),
        scenes :(context,arrayVal) =>context.commit("scenes",arrayVal),
        current_scene :(context,strVal) =>context.commit("current_scene",strVal),
        transitions :(context,arrayVal) =>context.commit("transitions",arrayVal),
        current_transition :(context,strVal) =>context.commit("current_transition",strVal),
        transition_duration :(context,numberVal) =>context.commit("transition_duration",numberVal),
        sounds :(context,arrayVal) =>context.commit("sounds",arrayVal),
        connect_config :(context,jsonVal) =>context.commit("connect_config",jsonVal),
    }
});

export default store;