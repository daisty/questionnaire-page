/**
 * Created by Bjike on 2017/9/21.
 */
//点击进入试卷页面
$(".btn-create-test").click(function(编辑页面){
    questionType = "test";
    $(".wrap").css("display","none");
    $(".edit-survey-wrap").css("display","none");
    $(".edit-survey-wrap1").css("display","block");
    // 导航栏效果
    $(".select-question-title1").toggle(function(){
        $(".module1").css("display","block");
        $(this).removeClass("select-question-title1").addClass("select-question-title21");
    },function(){
        $(".module1").css("display","none");
        $(this).removeClass("select-question-title21").addClass("select-question-title1");
    });
    $(".common-questions-title1").toggle(function(){
        $(".common_question1").css("display","block");
        $(this).removeClass("common-questions-title1").addClass("common-questions-title21");
    },function(){
        $(".common_question1").css("display","none");
        $(this).removeClass("common-questions-title21").addClass("common-questions-title1");
    });

    //点击问卷首页消失
    $(".module1").click(function(){
        $(".question-box-init1").remove();
    })


    $(".module1").on("click",function(event){
        for(var i = 0;i<$(".topic-type-content1").length;i++){
            var question_id = i + 1;
            $(".question-id1").eq(i).html("Q" + question_id);
        }

        $(".question-delete1").on("click",function(){
            for(var i = 0;i<$(".topic-type-content1").length;i++){
                var question_id = i + 1;
                $(".question-id1").eq(i).html("Q" + question_id);
            };
        })
    })


    // 导航栏固定
    var h = $(".sur-sidebar1").offset().top;
    var w = $(".rows11").clientLeft;
    $(window).scroll(function(){
        var scrolTop = $(document).scrollTop();
        if(scrolTop>h){
            $(".sur-sidebar1").css( {"position":"fixed",'left':w,'top':0})
        }else{
            $(".sur-sidebar1").css({"position":"static"})
        }
    })

});


$(".add-area1").on("click",function(){

    $(".question-delete1").on("click",function(){
        $(this).parents(".topic-type-content1").remove();
    })
});

var radio1 = '<div class="topic-type-content1 topic-type-question1 after-clear add-choice-parent1 radio-choice-parent1" order="1">'+
    '        <div class="question-title1" type="6" name="radio-question1">'+
    '        <span class="required1">*</span>'+
    '        <span class="question-id1" page="1" index="1" absolute_id="1" question-required="Y" has_other="N" title-quote="N" choice-quote="0">Q1</span>'+
    '        <div class="position-relative1">'+
    '        <div class="qs-content1 edit-area1 edit-title1" tabindex="0" contenteditable="true" content-default="1">单选题</div>'+
    '        </div>'+
    '        </div>'+
    '        <ul class="question-choice1 radio-question-choice1">'+
    '        <li class="choice1" has_other="N" choice_absolute_id="1">'+
    '        <input type="radio" name="radio">'+
    '        <div class="position-relative">'+
    '        <span>A</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项</div>'+
    '        </div>'+
    '        <div class="option-tips1"></div>'+
    '        </li>'+
    '        <li class="choice1" has_other="N" choice_absolute_id="1">'+
    '        <input type="radio" name="radio">'+
    '        <div class="position-relative1">'+
    '        <span>B</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项</div>'+
    '        </div>'+
    '        <div class="option-tips1"></div>'+
    '        </li>'+
    '        <li class="choice1" has_other="N" choice_absolute_id="1">'+
    '        <input type="radio" name="radio">'+
    '        <div class="position-relative1">'+
    '        <span>C</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项</div>'+
    '        </div>'+
    '        <div class="option-tips1"></div>'+
    '        </li>'+
    '        <li class="choice1" has_other="N" choice_absolute_id="2">'+
    '        <input type="radio" name="radio">'+
    '        <div class="position-relative1">'+
    '        <span>D</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项</div>'+
    '        </div>'+
    '        <div class="option-tips1"></div>'+
    '        </li>'+
    '<li class="answer1" has_other="N" choice_absolute_id="2">        <span onclick="a()"> 答案 </span>        <div class="position-relative1">        <input type="text" class="edit-area1 edit-child-element1 edit-answer1" contenteditable="true" content-default="1"  onchange="judge()" placeholder="请输入">        </div>        <div class="option-tips1"></div>        </li>'+

    '        </ul>'+
    '        <div class="add-area1 visible-hide1 ">'+
    '        <ul>'+
    '        <li class="add-choice1 radio-add-choice1" title="增加" onclick="edit_addchoice1(event)"></li>'+
    '        <li class="batch-add-choice1" title="批量增加" onclick="edit_removechoice1(event)"></li>'+
    '        </ul>'+
    '        </div>'+
    '        <div class="operate1 visible-hide1">'+
    '        <ul>'+
    '        <li class="question-delete1" title="删除"></li>'+
    '        </ul>'+
    '        </div>'+
    '        </div>';
var checkbox1 = '<div class="topic-type-content1 topic-type-question1 after-clear add-choice-parent1 checkbox-choice-parent1"  order="2">'+
    '    <div class="question-title1" type="8" name="checkbox-question1">'+
    '        <span class="required1">*</span>'+
    '        <span class="question-id1" page="1" index="3" absolute_id="3" question-required="Y" has_other="N" title-quote="N" choice-quote="0" min="" max="" exclusive-options="">Q3</span>'+
    '        <div class="position-relative1">'+
    '            <div class="qs-content1 edit-area1 edit-title1" tabindex="0" contenteditable="true" content-default="1">多选题</div>'+
    '        </div>'+
    '    </div>'+
    '    <ul class="question-choice1">'+
    '        <li class="choice1" has_other="N" choice_absolute_id="1">'+
    '            <input type="checkbox" name="checkbox">'+
    '            <div class="position-relative1">'+
    '                <span>A</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项 </div>'+
    '            </div>'+
    '            <div class="option-tips1"></div>'+
    '        </li>'+
    '        <li class="choice1" has_other="N" choice_absolute_id="1">'+
    '            <input type="checkbox" name="checkbox">'+
    '            <div class="position-relative1">'+
    '                <span>B</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项 </div>'+
    '            </div>'+
    '            <div class="option-tips"></div>'+
    '        </li>'+
    '        <li class="choice1" has_other="N" choice_absolute_id="1">'+
    '            <input type="checkbox" name="checkbox">'+
    '            <div class="position-relative1">'+
    '                <span>C</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项 </div>'+
    '            </div>'+
    '            <div class="option-tips1"></div>'+
    '        </li>'+
    '        <li class="choice1" has_other="N" choice_absolute_id="2">'+
    '            <input type="checkbox" name="checkbox">'+
    '            <div class="position-relative1">'+
    '                <span>D</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项 </div>'+
    '            </div>'+
    '            <div class="option-tips1"></div>'+
    '        </li>'+
    '<li class="answer1" has_other="N" choice_absolute_id="2">        <span> 答案 </span>        <div class="position-relative1">        <input type="text" class="edit-area1 edit-child-element1 edit-answer1" contenteditable="true" content-default="1" placeholder="请输入" onchange="judge()">        </div>        <div class="option-tips1"></div>        </li>'+

    '    </ul>'+
    '    <div class="add-area1 visible-hide1">'+
    '        <ul>'+
    '            <li class="add-choice1 checkbox-add-choice1" title="增加" onclick="edit_addcheckbox1(event)"></li>'+
    '            <li class="batch-add-choice1" title="批量增加" onclick="edit_removechoice1(event)" ></li>'+
    '        </ul>'+
    '    </div>'+
    '    <div class="operate1 visible-hide1">'+
    '        <ul>'+
    '            <li class="question-delete1" title="删除"></li>'+
    '        </ul>'+
    '    </div>'+
    '</div>';
var input1 = '<div class="topic-type-content1 topic-type-question1 after-clear operate-parent1" order="3">'+
    '    <div class="question-title1" type="1" name="input-question">'+
    '        <span class="required1">*</span>'+
    '        <span class="question-id1" page="1" index="4" absolute_id="4" question-required="Y" has_other="N" title-quote="N">Q4</span>'+
    '        <div class="position-relative1">'+
    '            <div class="qs-content1 edit-area1 edit-title1" contenteditable="true" content-default="1">填空题</div>'+
    '        </div>'+
    '    </div>'+
    '    <ul class="question-choice1">'+
    '        <li class="textarea-parent1"><textarea name="" class="multi-input1"></textarea></li>'+
    '<li class="answer1" has_other="N" choice_absolute_id="2">        <span> 答案 </span>        <div class="position-relative1">        <div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1"></div>        </div>        <div class="option-tips1"></div>        </li>'+

    '    </ul>'+
    '    <div class="operate1 visible-hide1 multi-input-margin1" style="width: 50px;">'+
    '        <ul>'+
    '            <li class="question-delete1" title="删除" ></li>'+
    '        </ul>'+
    '    </div>'+
    '</div>';
function addRadio1(){
    $("#question-box1").append(radio1);
    $('.radio-choice-parent1').hover(function(){
        var index = $(this).index();
        // console.log(index)
        $(this).find(".add-area1 ").removeClass("visible-hide1");
        $(this).find(".operate1").removeClass("visible-hide1");
    },function(){
        $(this).find(".add-area1 ").addClass("visible-hide1");
        $(this).find(".operate1").addClass("visible-hide1");
    });
    $(".question-delete1").on("click",function(){
        $(this).parents(".topic-type-content1").remove();
    });
}
function addCheckbox1(){
    $("#question-box1").append(checkbox1)
    $('.checkbox-choice-parent1').each(function(index, e){
        $(this).hover(function(){
            $(this).find(".add-area1 ").removeClass("visible-hide1");
            $(this).find(".operate1").removeClass("visible-hide1");
        },function(){
            $(this).find(".add-area1 ").addClass("visible-hide1");
            $(this).find(".operate1").addClass("visible-hide1");
        });
    });
    $(".question-delete1").on("click",function(){
        $(this).parents(".topic-type-content1").remove();
    })
}
function addInput1(){
    $("#question-box1").append(input1)
    $(".operate-parent1").hover(function(){
        $(this).find(".operate1").removeClass("visible-hide1");
    },function(){
        $(this).find(".operate1").addClass("visible-hide1");
    });
    $(".question-delete1").on("click",function(){
        $(this).parents(".topic-type-content1").remove();
    })
}
var questionType = "";
var radioImgId = 0;
var checkboxImgId = 0;
function addRadioImg1(event){
    radioImgId ++;
    $("#question-box1").append(radio_img1(radioImgId));
    $(".operate-parent1").hover(function(){
        $(this).find(".operate1").removeClass("visible-hide1");
    },function(){
        $(this).find(".operate1").addClass("visible-hide1");
    });
    $(".question-delete1").on("click",function(){
        $(this).parents(".topic-type-content1").remove();
    })
    var index = document.querySelectorAll('.survey-question-upload-img-btn1').length-1;
    // console.log(index);
    $(".survey-question-upload-img-wrap1").eq(index).prepend(      '       <input type="file" id="radioImg'+radioImgId+'" style="display:none;" onchange="handleFilesRadio1(event)">')

}
function addCheckboxImg1(event){
    checkboxImgId ++;
    $("#question-box1").append(checkbox_img1(checkboxImgId));
    $(".operate-parent1").hover(function(){
        $(this).find(".operate1").removeClass("visible-hide1");
    },function(){
        $(this).find(".operate1").addClass("visible-hide1");
    });
    $(".question-delete1").on("click",function(){
        $(this).parents(".topic-type-content1").remove();
    })
    var index = document.querySelectorAll('.survey-question-upload-checkbox-btn1').length-1;
    // console.log(checkbox_img(checkboxImgId));
    $(".survey-question-upload-checkbox-wrap1").eq(index).prepend(   '       <input type="file" id="checkboxImg'+checkboxImgId+'" style="display:none;" onchange="handleFilesCheckbox1(event)">')

}



function radio_choice1(number){
    return '<li class="choice1" has_other="N" choice_absolute_id="1">' +
        '        <input type="radio" name="radio">' +
        '        <div class="position-relative1">' +
        '        <span>'+number+'</span><div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项 </div>' +
        '        </div>' +
        '        <div class="option-tips1"></div>' +
        '</li>';
}
function checkbox_choice1(number){
    return    '<li class="choice1" has_other="N" choice_absolute_id="1">            <input type="checkbox" name="checkbox">            <div class="position-relative1">           <span>'+number+'</span>     <div class="edit-area1 edit-child-element1" contenteditable="true" content-default="1">选项 </div>            </div>            <div class="option-tips1"></div>        </li>';


}
function radio_img1(val){
    return '<div class="topic-type-content1 topic-type-question1 after-clear1 operate-parent1 radio-img-parent1" order="4">'+
        '    <div class="question-title1" type="14" name="radio-question">'+
        '        <span class="required1">*</span>'+
        '        <span class="question-id1"  page="1" index="8" absolute_id="8" question-required="Y" has_other="N" title-quote="N" choice-quote="0">Q8</span>'+
        '        <div class="position-relative1">'+
        '            <div class="qs-content1 edit-area1 edit-title1" tabindex="0" contenteditable="true" content-default="1">图片单选题</div>'+
        '        </div>'+
        '    </div>'+
        '    <ul class="question-choice1 after-clear">'+
        '<li class="answer1" has_other="N" choice_absolute_id="2">        <span> 答案 </span>        <div class="position-relative1">        <select class="sl"><option>请选择答案<opion></select>       </div>        <div class="option-tips"></div>        </li></ul>'+

        '    <div class="add-area1 survey-question-upload-img-wrap1" style="position: relative; left: 0px; top: 0px;">'+

        '        <label for="radioImg'+val+'" class="survey-question-upload-img-btn1" ">'+
        '            <div class="survey-question-upload-img-inner1">'+
        '                <img src="img/upload-image.png">'+
        '                <div class="survey-question-upload-img-inner-title1">点击上传图片</div>'+
        '                <div class="survey-question-upload-img-inner-desc1">最多可上传50张图片</div>'+
        '            </div>'+
        '        </label>' +
        '    </div>'+
        '    <div class="operate1 visible-hide1">'+
        '        <ul>'+
        '            <li class="question-delete1" title="删除"></li>'+
        '        </ul>'+
        '    </div>'+
        '</div>'
}
function checkbox_img1(val){
    return '<div class="topic-type-content1 topic-type-question1 after-clear operate-parent1 add check-img-parent1" order="5">'+
        '    <div class="question-title1" type="15" name="checkbox-image">'+
        '        <span class="required1">*</span>'+
        '        <span class="question-id1"  page="1" index="9" absolute_id="9" question-required="Y" has_other="N" title-quote="N" choice-quote="0" min="" max="">Q9</span>'+
        '        <div class="position-relative1">'+
        '            <div class="qs-content1 edit-area1 edit-title1" tabindex="0" contenteditable="true" content-default="1" ;">图片多选题</div>'+
        '        </div>'+
        '    </div>'+
        '    <ul class="question-choice1 after-clear">      ' +
        '<li class="answer1" has_other="N" choice_absolute_id="2">        <span> 答案 </span>        <div class="position-relative1">       <div class="sld"></div> <input  type="text" class="edit-area1 edit-child-element1 edit-answer1" contenteditable="true" content-default="1" placeholder="请输入" onchange="judge()">        </div>        <div class="option-tips1"></div>        </li></ul>'+

        '    <div class="add-area1 survey-question-upload-checkbox-wrap1" style="position: relative; left: 0px; top: 0px;">'+

        '                 <label for="checkboxImg'+val+'" class="survey-question-upload-checkbox-btn1">'+
        '            <div class="survey-question-upload-checkbox-inner1">'+
        '                <img src="img/upload-image.png">'+
        '                <div class="survey-question-upload-checkbox-inner-title1">点击上传图片</div>'+
        '                <div class="survey-question-upload-checkbox-inner-desc1">最多可上传50张图片</div>'+
        '            </div>'+
        '        </label>' +
        '    </div>'+
        '    <div class="operate1 visible-hide1" >'+
        '        <ul>'+
        '            <li class="question-delete1" title="删除"></li>'+
        '        </ul>'+
        '    </div>'+
        '</div>';
}





var Aarr = ['A','B','C','D','E',"F","G"];
function edit_addchoice1(event){
    var index = $('.radio-add-choice1').index($(event.target));
    var aa = $(".radio-choice-parent1").eq(index).find(".option-tips1").length;
    // console.log(aa);
    $(".radio-choice-parent1").eq(index).find(".answer1").before(radio_choice1(Aarr[aa-1]));
}
function edit_removechoice1(event){
    var index = $('.batch-add-choice1').index($(event.target));
    console.log(index);
    $(".add-choice-parent1").eq(index).find(".choice1").last().remove();
}
function edit_addcheckbox1(event){
    var index = $('.checkbox-add-choice1').index($(event.target));
    var bb = $(".checkbox-choice-parent1").eq(index).find(".option-tips1").length;
    $(".checkbox-choice-parent1").eq(index).find(".answer1").before(checkbox_choice1(Aarr[bb-1]));
}

function radioImgChoice1(radioSrc1,num){
    return '<li class="choice1 survey-question-radio-img1" has_other="N" choice_absolute_id="2">'+
        '    <div class="survey-question-radio-choice1 edit-area-active1">'+
        '        <div class="survey-question-radio-choice-img1">'+
        '            <a class="remove-child-element1 survey-question-radio-img-remove1" onclick="removeImage1(event)" style="display: block;"></a>'+
        '            <label id="label" for="file" class="imgfile1">'+
        '            <img class="img" src="  ' + radioSrc1 + ' " alt="" class="imgRadio1">'+
        '            </label>'+
        '        </div>'+
        '        <div class="survey-question-radio-choice-text1">'+
        '           <input type="radio" name="radio"> <span>'+num+'</span><label class="edit-area1 edit-child-element1" contenteditable="true">选项1</label>'+
        '            <div class="option-tips1">'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</li>'

}
function checkboxImgChoice1(checkboxSrc1,num){
    return '<li class="choice1 survey-question-checkbox-img1" has_other="N" choice_absolute_id="2">'+
        '    <div class="survey-question-checkbox-choice1 edit-area-active1">'+
        '        <div class="survey-question-checkbox-choice-img1">'+
        '            <a class="remove-child-element1 survey-question-checkbox-img-remove1" onclick="removeImage1(event)" style="display: block;"></a>'+
        '            <label id="label" for="file" class="imgfile1">'+
        '            <img class="img" src="  ' + checkboxSrc1 + ' " alt="" class="imgCheckbox1">'+
        '            </label>'+
        '        </div>'+
        '        <div class="survey-question-checkbox-choice-text1">'+
        '            <input type="checkbox" name="checkbox"><span>'+num+'</span><label class="edit-area1 edit-child-element1" contenteditable="true">选项1</label>'+
        '            <div class="option-tips1">'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</li>'

}
var radioSrc1 = "";
var checkboxSrc1 = "";
function handleFilesRadio1(event){
    // console.log(111)
    var img = document.querySelectorAll('.imgRadio1');
    var dom = event.target;
	var fd = new FormData();
	fd.append('file',dom.files[0]);
	$.ajax({
            url : '/examination/index/files',
            type : 'post',
            data : fd,
            contentType : false,
            processData : false,
            cache : false,
            success : function (url) {
                if(url.code == 200){
                    // console.log(111)
					var index = $(event.target).index();
					var cc = $(event.target).parents().prev('.question-choice1').find(".choice1").length;
					$(event.target).parents(".radio-img-parent1").find(".answer1").before(radioImgChoice1(url.data.image,Aarr[(cc)]));
					var sl='<option >'+Aarr[(cc)]+'</option>';
					$(event.target).parents().prev('.question-choice1').find('.sl').append(sl)
                }else{
                    console.log(url);return false;
                }
            }
        });
    
    
}

function handleFilesCheckbox1(event){
	console.log(event)
    var img = document.querySelectorAll('.imgCheckbox1');
    var dom = event.target;
	var fd = new FormData();
	fd.append('file',dom.files[0]);
	$.ajax({
            url : '/examination/index/files',
            type : 'post',
            data : fd,
            contentType : false,
            processData : false,
            cache : false,
            success : function (url) {
                if(url.code == 200){
                    // console.log(111)
					var index = $(event.target).index();
					var dd = $(event.target).parents().prev('.question-choice1').find(".choice1").length;
					$(event.target).parents(".check-img-parent1").find(".answer1").before(checkboxImgChoice1(url.data.image,Aarr[(dd)]));
					console.log($(event.target))
					var sld='<input type="checkbox" value="'+Aarr[(dd)]+'" >'+Aarr[(dd)];
					$(event.target).parents().prev('.question-choice1').find('.sld').append(sld)
                }else{
                    console.log(url);return false;
                }
            }
        });
	
}
function removeImage1(event){
    var index = $(".survey-question-radio-img-remove1").index($(event.target));
    $(".survey-question-radio-img1").eq(index).remove()
    var index1 = $(".survey-question-checkbox-img-remove1").index($(event.target));
    $(".survey-question-checkbox-img1").eq(index1).remove()
}

function previewAll1(){
    window.open("preview.html","blank")
    // $(".rows21").prepend('<div class="back-survey1 dib1 vm1 mr10">'+
    //     '                                <input type="button" class="bce-ui-button1 btn-back1" value="返回" onclick="back1()">'+
    //     '                            </div>')
    // $('.rows11').css("display","none");
    // $('.navigation1').css("display","none");
    // $(".title-content1").css("margin-top","10px");
    // $("[contenteditable]").attr("contenteditable","false");
    // $(".preview-survey1 .btn-lg1").css("display","none");
    // $(".survey-question-upload-checkbox-wrap1").css("display","none");
    // $(".survey-question-upload-img-wrap1").css("display","none");

}
// function back1(){
//     $(".back-survey1").remove();
//     $('.rows11').css("display","block");
//     $('.navigation1').css("display","block");
//     $(".title-content1").css("margin-top","0");
//     $("[contenteditable]").attr("contenteditable","true");
//     $(".preview-survey1 .btn-lg1").css("display","block");
//     $(".survey-question-upload-checkbox-wrap1").css("display","block");
//     $(".survey-question-upload-img-wrap1").css("display","block");
//
// }
var Aar =[];
function judge(){
    for(var i = 0;i<$(".topic-type-content1").length;i++){
        var answer = $(".topic-type-content1").eq(i).find(".edit-answer1").val();
        console.log(answer)
        // console.log(Aarr)
        for(var j = 0;j<$(".topic-type-content1").eq(i).find(".choice1").length;j++){
             Aar[j] = Aarr[j];
             var radioContent = {};
            radioContent[Aarr[j]] = $(".topic-type-content1").eq(i).find(".choice1").eq(j).find(".edit-child-element1").html();
        }

    }
    var as = Aar.indexOf(answer)
    console.log(as)
    if(as == -1){alert("输入错误")};
    // alert(1)
}
function submitAll1(){
    var questionData = {};
    var length = $(".topic-type-content1").length;
    questionData["questionType"] = questionType;//问卷or试卷
    var txt=[];
    var totalTitle = $(".title-content1").html();//标题
    var totalScribe = $(".desc-content1").html();//描述
    //txt.push(totalTitle);//问卷标题
    questionData["totalTitle"] = totalTitle;
    //txt.push(totalScribe);//问卷描述
    questionData["totalScribe"] = totalScribe;
    judge();
    for(var i = 0;i<length;i++){

        var order= $(".topic-type-content1").eq(i).attr("order");
        order =  parseInt(order);

        switch(order){
            case 1://单选题
                var radioContent={};
                var radioTitle = [];
                var title = $(".topic-type-content1").eq(i).find(".edit-title1").html();
                var answer = $(".topic-type-content1").eq(i).find(".edit-answer1").html();
                radioTitle[i]= title;
                for(var j = 0;j<$(".topic-type-content1").eq(i).find(".choice1").length;j++){
                    //console.log(Aarr[j]);return false;
                    var c=$(".topic-type-content1").eq(i).find(".choice1").eq(j).find(".edit-child-element1").html();
                    radioContent[Aarr[j]]=c

                }
                //var b=0;
                if(answer=='')
                {
                    alert("请设置的你的答案")
                }

               // return false;
              //  if(answer != Aarr[j]){alert("输入错误")}
                var datas={};
                datas['order']=order;//题目类型
                datas['title']=title;//题目
                datas['content']=radioContent;//选项
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = answer;
                //var aa=window.JSON.stringify(datas);
                console.log(datas);
                //alert(title)
                console.log(radioContent)
                txt.push(datas);

                break;
            case 2://多选题
                var checkboxContent = [];
                var checkboxTitle = [];
                var title = $(".topic-type-content1").eq(i).find(".edit-title1").html();
                var answer = $(".topic-type-content1").eq(i).find(".edit-answer1").html();
                checkboxTitle[i]= title;
                for(var j = 0;j<$(".topic-type-content1").eq(i).find(".choice1").length;j++){
                    var c=$(".topic-type-content1").eq(i).find(".choice1").eq(j).find(".edit-child-element1").html();
                    checkboxContent[j]=c;
                }
                if(!checkboxContent[answer])
                {
                    alert(111)
                }else{
                    alert(222)
                }
                return false;

                // if(answer != Aarr[j]){alert("输入错误")}
                var datas={};
                datas['order']=order;//题目类型
                datas['title']=title;//题目
                datas['content']=checkboxContent;//选项
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = answer;
                // console.log(datas);
                txt.push(datas)

                break;
            case 3://填空题
                var inputTitle = [];
                var title = $(".topic-type-content1").eq(i).find(".edit-title1").html();
                var answer = $(".topic-type-content1").eq(i).find(".edit-answer1").html();
                inputTitle[i]= title;
                var datas={};
                datas['order']=order;//题目类型
                datas['title']=title;//题目
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = answer;
                // console.log(datas);
                txt.push(datas);
                break;
            case 4://图片单选题
                var radioImgTitle = [];
                var radioImgContent = [];
                var radioImgSrc = [];
                var title = $(".topic-type-content1").eq(i).find(".edit-title1").html();
                var answer = $(".topic-type-content1").eq(i).find(".sl").html();
                radioImgTitle[i]= title;
                for(var j = 0;j<$(".topic-type-content1").eq(i).find(".choice1").length;j++){
                    // var files =
                    var b=$(".topic-type-content1").eq(i).find(".choice1").eq(j).find(".imgfile1 img").attr("src");
                    var c=$(".topic-type-content1").eq(i).find(".choice1").eq(j).find(".edit-child-element1").html();
                    radioImgContent[j]=c;
                    radioImgSrc[j]=b;
                }
                if(answer != Aarr[j]){alert("输入错误")}
                var datas={};
                datas['order']=order;//题目类型
                datas['title']=title;//题目
                datas['questionNumber'] = i+1;//题号
                datas['content']=radioImgContent;//选项
                datas['src']=radioImgSrc;//图片地址
                datas['answer'] = answer;
                // datas['files'] = radiofiles
                // console.log(datas);
                txt.push(datas);
                break;
            case 5://图片多选题
				alert(1)
                var checkImgTitle = [];
                var checkImgContent = [];
                var checkImgSrc = [];
                var title = $(".topic-type-content1").eq(i).find(".edit-title1").html();
                var answer = $(".topic-type-content1").eq(i).find(".sl").val();
                checkImgTitle[i]= title;
                for(var j = 0;j<$(".topic-type-content1").eq(i).find(".choice1").length;j++){
                    var b=$(".topic-type-content1").eq(i).find(".choice1").eq(j).find(".imgfile1 img").attr("src");
                    var c=$(".topic-type-content1").eq(i).find(".choice1").eq(j).find(".edit-child-element1").html();
                    checkImgContent[j]=c;
                    checkImgSrc[j]=b;
                }
                if(answer != Aarr[j]){alert("输入错误")}
                var datas={};
                datas['order']=order;//题目类型
                datas['title']=title;//题目
                datas['questionNumber'] = i+1;//题号
                datas['content']=checkImgContent;//选项
                datas['src']=checkImgSrc;//图片地址
                datas['answer'] = answer;
                console.log(datas);
                txt.push(datas);
                break;
            default:
                alert("error")
        }
    }
    questionData["question"] = txt;
    window.JSON.stringify(questionData)
    // console.log(radioTitle)
    console.log(questionData)
    $.ajax({
        type:"get",
        url:"/examination/index/paper",
        data:txt,
        dataType:"jsonp",
        jsonp: "callbackparam",
        success:function(msg){
            console.log(msg)
        }});
}




