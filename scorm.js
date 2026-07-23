(function(global){
  "use strict";
  let api=null;
  let version=null;
  let initialized=false;
  let terminated=false;

  function findApi(start,name){
    let win=start;
    for(let i=0;i<25 && win;i++){
      try{if(win[name]) return win[name];}catch(_e){}
      try{if(win.parent && win.parent!==win) win=win.parent; else break;}catch(_e){break;}
    }
    return null;
  }
  function locate(){
    if(api) return api;
    api=findApi(global,"API_1484_11");
    if(api){version="2004";return api;}
    api=findApi(global,"API");
    if(api){version="1.2";return api;}
    try{
      if(global.opener){
        api=findApi(global.opener,"API_1484_11");
        if(api){version="2004";return api;}
        api=findApi(global.opener,"API");
        if(api){version="1.2";return api;}
      }
    }catch(_e){}
    return null;
  }
  function call(name12,name2004,args){
    if(!locate()) return null;
    try{return api[version==="1.2"?name12:name2004].apply(api,args||[]);}catch(error){console.warn("SCORM call failed",error);return null;}
  }
  function initialize(){
    if(initialized) return true;
    if(!locate()) return false; // GitHub Pages: funciona como juego web sin LMS.
    const result=call("LMSInitialize","Initialize",[""]);
    initialized=(String(result).toLowerCase()==="true" || result===true);
    if(initialized){
      const status=get(version==="1.2"?"cmi.core.lesson_status":"cmi.completion_status");
      if(!status || status==="not attempted" || status==="unknown") startAttempt();
    }
    return initialized;
  }
  function get(element){
    if(!initialized && !initialize()) return "";
    return String(call("LMSGetValue","GetValue",[element]) ?? "");
  }
  function set(element,value){
    if(!initialized && !initialize()) return false;
    const result=call("LMSSetValue","SetValue",[element,String(value)]);
    return String(result).toLowerCase()==="true" || result===true;
  }
  function commit(){
    if(!initialized || terminated) return false;
    const result=call("LMSCommit","Commit",[""]);
    return String(result).toLowerCase()==="true" || result===true;
  }
  function formatTime12(seconds){
    seconds=Math.max(0,Math.floor(Number(seconds)||0));
    const h=String(Math.floor(seconds/3600)).padStart(2,"0");
    const m=String(Math.floor((seconds%3600)/60)).padStart(2,"0");
    const s=String(seconds%60).padStart(2,"0");
    return `${h}:${m}:${s}`;
  }
  function formatTime2004(seconds){
    seconds=Math.max(0,Math.floor(Number(seconds)||0));
    const h=Math.floor(seconds/3600),m=Math.floor((seconds%3600)/60),s=seconds%60;
    return `PT${h}H${m}M${s}S`;
  }
  function startAttempt(){
    if(!initialized && !initialize()) return false;
    if(version==="1.2") set("cmi.core.lesson_status","incomplete");
    else{
      set("cmi.completion_status","incomplete");
      set("cmi.success_status","unknown");
    }
    return commit();
  }
  function saveScore(score,seconds){
    if(!initialized && !initialize()) return false;
    const raw=Math.max(0,Math.min(5,Number(score)||0));
    if(version==="1.2"){
      set("cmi.core.score.min","0");
      set("cmi.core.score.max","5");
      set("cmi.core.score.raw",raw.toFixed(2));
      if(seconds!==undefined) set("cmi.core.session_time",formatTime12(seconds));
    }else{
      set("cmi.score.min","0");
      set("cmi.score.max","5");
      set("cmi.score.raw",raw.toFixed(2));
      set("cmi.score.scaled",(raw/5).toFixed(4));
      if(seconds!==undefined) set("cmi.session_time",formatTime2004(seconds));
    }
    return commit();
  }
  function finish(score,status,seconds){
    if(terminated) return true;
    if(!initialized && !initialize()) return false;
    saveScore(score,seconds);
    const normalized=status==="passed"?"passed":"failed";
    if(version==="1.2"){
      set("cmi.core.lesson_status",normalized);
      set("cmi.core.exit","");
    }else{
      set("cmi.completion_status","completed");
      set("cmi.success_status",normalized);
      set("cmi.exit","normal");
    }
    commit();
    const result=call("LMSFinish","Terminate",[""]);
    terminated=(String(result).toLowerCase()==="true" || result===true);
    return terminated;
  }
  function learnerName(){
    if(!initialized && !initialize()) return "";
    return get(version==="1.2"?"cmi.core.student_name":"cmi.learner_name");
  }
  global.SCORMBridge={initialize,startAttempt,saveScore,finish,learnerName,isConnected:()=>Boolean(api&&initialized),version:()=>version};
  document.addEventListener("DOMContentLoaded",function(){
    initialize();
    const input=document.getElementById("playerName");
    const name=learnerName();
    if(input && name && !input.value.trim()) input.value=name;
  });
  global.addEventListener("beforeunload",function(){if(initialized&&!terminated) commit();});
})(window);
