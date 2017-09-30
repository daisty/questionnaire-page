/**
 * Created by Bjike on 2017/9/22.
 */
$(function(){
    $("[contenteditable]").attr("contenteditable","false");
    $(".edit-area1").hover(function(){
        $(this).css("background","#fff")
    })

});
// 调查问卷提交方法
function submitResult(){
    var questionResult = {};
    var txt = [];
    var answer = "";
    var totalTitle = $(".title-content").html();//标题
    questionResult["totalTitle"] = totalTitle;
    for(var i = 0;i<$(".topic-type-content").length;i++){
        var question = $(".topic-type-content").eq(i);
        var order= question.attr("order");
        order =  parseInt(order);
        var choice = question.find(".choice");
        switch(order){
            case 1:
                for(var j = 0;j<choice.length;j++){
                    if(choice[j].checked){
                        answer = choice[j].val();
                    }else{
                        alert("请选择单选题答案")
                    }
                }
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = answer;
                txt.push(datas)

                break;
            case 2:
                for(var j = 0;j<choice.length;j++){
                    var chk_value =[];
                    if(choice[j].checked){
                        chk_value.push($(this).val());
                    }else{alert("请选择多选题答案")};
                }
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = chk_value;
                txt.push(datas)
                break;
            case 3:
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                answer = question.find(".multi-input").val();
                if(answer = ""){alert("请输入填空题答案")}
                datas['answer'] = answer;
                txt.push(datas)
                break;
            case 4:
                for(var j = 0;j<choice.length;j++){
                    if(choice[j].checked){
                        answer = choice[j].val();
                    }else{
                        alert("请选择图片单选题答案")
                    }
                }
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = answer;
                txt.push(datas)
                break;
            case 5:
                for(var j = 0;j<choice.length;j++){
                    var checkImgValue =[];
                    if(choice[j].checked){
                        checkImgValue.push($(this).val());
                    }else{alert("请选择图片多选题答案")};
                }
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = checkImgValue;
                txt.push(datas)
                break;
            default:
                alert("error")
        }
    }
    questionResult["question"] = txt;
    window.JSON.stringify(questionResult)
    console.log(questionResult)
    $.ajax({
        type:"get",
        url:"/examination/index/paper",
        data:questionResult,
        dataType:"jsonp",
        jsonp: "callbackparam",
        success:function(msg){
            console.log(msg)
        }});
}
// 在线试卷提交方法
function submitAnswer(){
    var questionAnswer = {};
    var txt = [];
    var answer = "";
    var totalTitle = $(".title-content1").html();//标题
    questionAnswer["totalTitle"] = totalTitle;
    for(var i = 0;i<$(".topic-type-content1").length;i++){
        var question = $(".topic-type-content1").eq(i);
        var order= question.attr("order");
        order =  parseInt(order);
        var choice = question.find(".choice1");
        switch(order){
            case 1:
                for(var j = 0;j<choice.length;j++){
                    if(choice[j].checked){
                        answer = choice[j].val();
                    }else{
                        alert("请选择单选题答案")
                    }
                }
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = answer;
                txt.push(datas)

                break;
            case 2:
                for(var j = 0;j<choice.length;j++){
                    var chk_value =[];
                    if(choice[j].checked){
                        chk_value.push($(this).val());
                    }else{alert("请选择多选题答案")};
                }
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = chk_value;
                txt.push(datas);
                break;
            case 3:
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                answer = question.find(".multi-input").val();
                if(answer = ""){alert("请输入填空题答案")}
                datas['answer'] = answer;
                txt.push(datas);
                break;
            case 4:
                for(var j = 0;j<choice.length;j++){
                    if(choice[j].checked){
                        answer = choice[j].val();
                    }else{
                        alert("请选择图片单选题答案")
                    }
                }
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = answer;
                txt.push(datas)
                break;
            case 5:
                for(var j = 0;j<choice.length;j++){
                    var checkImgValue =[];
                    if(choice[j].checked){
                        checkImgValue.push($(this).val());
                    }else{alert("请选择图片多选题答案")};
                }
                var datas = {};
                datas['order']=order;//题目类型
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = checkImgValue;
                txt.push(datas)
                break;
            default:
                alert("error")
        }
    }
    questionAnswer["question"] = txt;
    window.JSON.stringify(questionAnswer)
    // console.log(radioTitle)
    console.log(questionAnswer)
    $.ajax({
        type:"get",
        url:"/examination/index/paper",
        data:questionAnswer,
        dataType:"jsonp",
        jsonp: "callbackparam",
        success:function(msg){
            console.log(msg)
        }});
}