//再送要求を処理するポートを開く
chrome.extension.onConnect.addListener(function(port){
    port.onMessage.addListener(async function(msg,port) {
        if (msg.reget == "true") {
            //コンテンツを送信
            await port.postMessage({
                Caption: getTextBoxText('shigoto_no'),
                Title: getSelectedText('form_name_137') + "/" + getTextBoxText('form_name_138'),
                Job_No: getTextBoxText('shigoto_no'),
                Job_type: getTextBoxText('form_name_121'),
                Salary_time: (function(){
                    buff1 = getTextBoxText('form_name_123_1');
                    buff2 = getTextBoxText('form_name_123_2');
                    if (buff2){
                        buff1 += '円～' + buff2 + '円';
                    }else{
                        buff1 += '円';
                    }
                    return buff1;
                }()),
                Work_Place: getSelectedText('form_name_10_1') + getSelectedText('form_name_10_2'),
                Closest_Station: getTextBoxText('form_name_20_eki'),
                Point: getTextBoxText('form_name_37').replace(/\r?\n/g, '<br>'),
                Work_Detail: getTextBoxText('form_name_124').replace(/\r?\n/g, '<br>'),
                Salary_Detail: getTextBoxText('form_name_126').replace(/\r?\n/g, '<br>'),
                Work_place_detail: getSelectedText('form_name_10_1') + getSelectedText('form_name_10_2'),
                Station: getTextBoxText('form_name_20_eki'),
                Access: getTextBoxText('form_name_21'),
                Weekday: getTextBoxText('form_name_127').replace(/\r?\n/g, '<br>'),
                WorkTime1: getTime("worktime_from_1","worktime_to_1"),
                WorkTime2: getTime("worktime_from_2","worktime_to_2"),
                WorkTime3: getTime("worktime_from_3","worktime_to_3"),
                WorkTime_Detail: getTextBoxText('form_name_128').replace(/\r?\n/g, '<br>'),
                Holiday: getTextBoxText('form_name_131').replace(/\r?\n/g, '<br>'),
                Required_Qualification: getTextBoxText('form_name_132').replace(/\r?\n/g, '<br>'),
                Recommended_Qualification: getTextBoxText('form_name_133').replace(/\r?\n/g, '<br>'),
                Welfare_Benefits: getTextBoxText('form_name_134').replace(/\r?\n/g, '<br>'),
                Presentation: getTextBoxText('form_name_136').replace(/\r?\n/g, '<br>'),
                regetComp: "true"
            });
            return true;
        }
    });
});

function getTime(str1,str2) {
    buff1 = getSelectedText(str1 + '_h') + '時' + getSelectedText(str1 + '_m') + '分';
    buff2 = getSelectedText(str2 + '_h') + '時' + getSelectedText(str2 + '_m') + '分';
    if (buff1 != '---時---分'){
        if (buff2 != '---時---分'){
            return buff1 + " ～ " + buff2;
        }else{
            return buff1;
        }
    }
}

//テキストボックスからの値の取得
function getTextBoxText(txtName) {
    var obj = document.getElementsByName(txtName)[0];
  return obj.value.trim();
};

//セレクトからの値の取得
function getSelectedText(selName) {
    var obj =document.getElementsByName(selName)[0];
  return obj.options[obj.selectedIndex].text.trim();
};
