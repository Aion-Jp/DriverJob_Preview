//バックグラウンドオブジェクト
var mainPageID = chrome.extension.getBackgroundPage().mainPageID
//コンテンツ読み込み
pageReload();

//***** 以下　関数 *****//

//コンテンツ読み込み
async function pageReload(){
    //現在のページをクリア
    clearContents();

    //メインページとのポートを開く
    var port = chrome.tabs.connect(mainPageID, {name: "getContents"});

    //content_scripts側で処理が終わったらMessageを送ってくるので受け側を作成
    port.onMessage.addListener(function(msg,port) {
        if (msg.regetComp == "true") {
            //画面に反映
            setContents(msg);
        }
    });
    //メインページにコンテンツを要求
    await port.postMessage( { reget: "true" });
}

//再読み込みクリック
document.getElementById("reload").onclick = async function() {
    pageReload();
};

//コンテンツをセット
function setContents(msg) {
    //Title
    document.getElementsByTagName('title')[0].textContent = msg.Job_No;
    document.getElementById('title').textContent = msg.Title;
    //仕事No
    document.getElementById('job_no').textContent = 'DR' + msg.Job_No;
    document.getElementById('job_no2').textContent = 'DR' + msg.Job_No;
    //職種
    document.getElementById('job_type').textContent = msg.Job_type;
    //時給
    document.getElementById('salary_time').textContent = msg.Salary_time;
    //勤務地
    document.getElementById('work_place').textContent = msg.Work_Place;
    //最寄り駅
    document.getElementById('closest_station').textContent = msg.Closest_Station;
    //ポイント
    document.getElementById('point').innerHTML = msg.Point;
    //お仕事内容
    document.getElementById('work_detail').innerHTML = msg.Work_Detail;
    //給与
    document.getElementById('salary_detail').innerHTML = msg.Salary_Detail;
    //勤務地
    document.getElementById('work_place_detail').textContent = msg.Work_place_detail;
    document.getElementById('station').textContent = msg.Station;
    document.getElementById('access').textContent = msg.Access;
    //勤務日
    document.getElementById('weekday').innerHTML = msg.Weekday;
    //勤務時間
        //時間1
        document.getElementById('worktime1').textContent = msg.WorkTime1;
        //時間2
        document.getElementById('worktime2').textContent = msg.WorkTime2;
        //時間3
        document.getElementById('worktime3').textContent = msg.WorkTime3;
        //勤務時間備考
    document.getElementById('worktime_detail').innerHTML = msg.WorkTime_Detail;
    //休日
    document.getElementById('holiday').innerHTML = msg.Holiday;
    //必要免許
    document.getElementById('required_qualification').innerHTML = msg.Required_Qualification;
    //歓迎するスキル
    document.getElementById('recommended_qualification').innerHTML = msg.Recommended_Qualification;
    //待遇／福利厚生
    document.getElementById('welfare_benefits').innerHTML = msg.Welfare_Benefits;
    //おしごとアピール
    document.getElementById('presentation').innerHTML = msg.Presentation;
};

//コンテンツをクリア
function clearContents() {
    //Title
    document.getElementsByTagName('title')[0].textContent = '';
    document.getElementById('title').textContent = '';
    //仕事No
    document.getElementById('job_no').textContent = '';
    document.getElementById('job_no2').textContent = '';
    //職種
    document.getElementById('job_type').textContent = '';
    //時給
    document.getElementById('salary_time').textContent = '';
    //勤務地
    document.getElementById('work_place').textContent = '';
    //最寄り駅
    document.getElementById('closest_station').textContent = '';
    //ポイント
    document.getElementById('point').innerHTML = '';
    //お仕事内容
    document.getElementById('work_detail').innerHTML = '';
    //給与
    document.getElementById('salary_detail').innerHTML = '';
    //勤務地
    document.getElementById('work_place_detail').textContent = '';
    document.getElementById('station').textContent = '';
    document.getElementById('access').textContent = '';
    //勤務日
    document.getElementById('weekday').innerHTML = '';
    //勤務時間
        //時間1
        document.getElementById('worktime1').textContent = '';
        //時間2
        document.getElementById('worktime2').textContent = '';
        //時間3
        document.getElementById('worktime3').textContent = '';
        //勤務時間備考
    document.getElementById('worktime_detail').innerHTML = '';
    //休日
    document.getElementById('holiday').innerHTML = '';
    //必要免許
    document.getElementById('required_qualification').innerHTML = '';
    //歓迎するスキル
    document.getElementById('recommended_qualification').innerHTML = '';
    //待遇／福利厚生
    document.getElementById('welfare_benefits').innerHTML = '';
    //おしごとアピール
    document.getElementById('presentation').innerHTML = '';
};
