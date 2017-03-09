//-*- coding: utf-8 -*-
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
	if(msg.command && (msg.command == "filter")){
	    $("div").each(function(){
		    var txt = $(this).html();
		    $(this).html(txt.replace(/つらい|つら|辛い|厳しい|きびしい|疲れた|つかれた|死ね|殺す|殺|ころす|進捗ダメ|最悪|助けて|死にたい|死|しにたい|消えたい|憂鬱|鬱|うつ病|楽しくない|しんどい|どうしようもない|働きたくない|働かない/g, "にゃーん"));
		});
	}
    });
