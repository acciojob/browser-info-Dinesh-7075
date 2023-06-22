//your JS code here. If required.
function browerInfo(){
    // console.log(navigator.userAgent);
    //     document.querySelector("#browser-info").innerText= `You are using ${navigator.userAgent}  version` ;

        var result = bowser.getParser(window.navigator.userAgent);
        console.log(result);
      document.querySelector("#browser-info").innerText = ("You are using" + result.parsedResult.browser.name +
               "version" + result.parsedResult.browser.version);
}
browerInfo();