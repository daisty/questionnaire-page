/**
 * Created by Bjike on 2017/9/15.
 */
$(function(){
    // 首页效果
    $(".figure").hover(function(){
        $(this).css("border", "2px solid #1ea0fa").siblings(".figure").css("border", "2px solid transparent");
    });
    $(".btn-create").hover(function(){
        $(this).css({"background":"#1ea0fa","color":"#fff"})
    },function(){
        $(this).css({"background":"#fff","color":"#1ea0fa"})
    });
    $(".figure-survey").hover(function(){
        $(".survey-icon").removeClass("survey-icon").addClass("survey-icon2");
        $(".vote-icon2").removeClass("vote-icon2").addClass("vote-icon");
    });
    $(".figure-vote").hover(function(){
        $(".vote-icon").removeClass("vote-icon").addClass("vote-icon2");
        $(".survey-icon2").removeClass("survey-icon2").addClass("survey-icon");

    });
    //调查问卷

    //点击进入创建问卷事件
        $(".btn-create-question").click(function(){
            questionType = "question"
            $(".wrap").css("display","none");
            $(".edit-survey-wrap").css("display","block");
            $(".edit-survey-wrap1").css("display","none");

            // 导航栏效果
            $(".select-question-title").toggle(function(){
                $(".module").css("display","block");
                $(this).removeClass("select-question-title").addClass("select-question-title2");
            },function(){
                $(".module").css("display","none");
                $(this).removeClass("select-question-title2").addClass("select-question-title");
            });
            $(".common-questions-title").toggle(function(){
                $(".common_question").css("display","block");
                $(this).removeClass("common-questions-title").addClass("common-questions-title2");
            },function(){
                $(".common_question").css("display","none");
                $(this).removeClass("common-questions-title2").addClass("common-questions-title");
            });

            //点击问卷首页消失
            $(".module").click(function(){
                $(".question-box-init").remove();
            })

            // 动态添加



            // $("#radio").click(function(){
            //     // $("#question-box").append(radio)
            // });
            // $("#checkbox").click(function(){
            //     // $("#question-box").append(checkbox)
            // });
            // $("#input").click(function(){
            //
            // });
            $(".module").on("click",function(event){
                for(var i = 0;i<$(".topic-type-content").length;i++){
                    var question_id = i + 1;
                    $(".question-id").eq(i).html("Q" + question_id);
                }

                $(".question-delete").on("click",function(){
                    for(var i = 0;i<$(".topic-type-content").length;i++){
                        var question_id = i + 1;
                        $(".question-id").eq(i).html("Q" + question_id);
                    };
                })
            })


            // 导航栏固定
            var h = $(".sur-sidebar").offset().top;
            var w = $(".rows1").clientLeft;
            $(window).scroll(function(){
                var scrolTop = $(document).scrollTop();
                if(scrolTop>h){
                    $(".sur-sidebar").css( {"position":"fixed",'left':w,'top':0})
                }else{
                    $(".sur-sidebar").css({"position":"static"})
                }
            })

        });//end
    // $(".btn-create-question").click(function(){
    //     questionType = "question"
    // });







});
// function showBtn(){
//     console.log(222)
//     $(this).find(".add-area ").removeClass("visible-hide");
//     $(this).find(".operate").removeClass("visible-hide");
// }
// function hideBtn(){
//     console.log(333)
//     $(this).find(".add-area ").addClass("visible-hide");
//     $(this).find(".operate").addClass("visible-hide");
// }
var radio = '<div class="topic-type-content topic-type-question after-clear add-choice-parent radio-choice-parent" order="1" >'+
    '        <div class="question-title" type="6" name="radio-question">'+
    '        <span class="required">*</span>'+
    '        <span class="question-id" page="1" index="1" absolute_id="1" question-required="Y" has_other="N" title-quote="N" choice-quote="0">Q1</span>'+
    '        <div class="position-relative">'+
    '        <div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">单选题</div>'+
    '        </div>'+
    '        </div>'+
    '        <ul class="question-choice radio-question-choice">'+
    '        <li class="choice" has_other="N" choice_absolute_id="1">'+
    '        <input type="radio" name="radio">'+
    '        <div class="position-relative">'+
    '        <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项</div>'+
    '        </div>'+
    '        <div class="option-tips"></div>'+
    '        </li>'+
    '        <li class="choice" has_other="N" choice_absolute_id="1">'+
    '        <input type="radio" name="radio">'+
    '        <div class="position-relative">'+
    '        <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项</div>'+
    '        </div>'+
    '        <div class="option-tips"></div>'+
    '        </li>'+
    '        <li class="choice" has_other="N" choice_absolute_id="1">'+
    '        <input type="radio" name="radio">'+
    '        <div class="position-relative">'+
    '        <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项</div>'+
    '        </div>'+
    '        <div class="option-tips"></div>'+
    '        </li>'+
    '        <li class="choice" has_other="N" choice_absolute_id="2">'+
    '        <input type="radio" name="radio">'+
    '        <div class="position-relative">'+
    '        <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项</div>'+
    '        </div>'+
    '        <div class="option-tips"></div>'+
    '        </li>'+
    '        </ul>'+
    '        <div class="add-area visible-hide ">'+
    '        <ul>'+
    '        <li class="add-choice radio-add-choice" title="增加" onclick="edit_addchoice(event)"></li>'+
    '        <li class="batch-add-choice" title="批量增加" onclick="edit_removechoice(event)"></li>'+
    '        </ul>'+
    '        </div>'+
    '        <div class="operate visible-hide">'+
    '        <ul>'+
    '        <li class="question-delete" title="删除"></li>'+
    '        </ul>'+
    '        </div>'+
    '        </div>';
var checkbox = '<div class="topic-type-content topic-type-question after-clear add-choice-parent checkbox-choice-parent"  order="2" >'+
    '    <div class="question-title" type="8" name="checkbox-question">'+
    '        <span class="required">*</span>'+
    '        <span class="question-id" page="1" index="3" absolute_id="3" question-required="Y" has_other="N" title-quote="N" choice-quote="0" min="" max="" exclusive-options="">Q3</span>'+
    '        <div class="position-relative">'+
    '            <div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">多选题</div>'+
    '        </div>'+
    '    </div>'+
    '    <ul class="question-choice">'+
    '        <li class="choice" has_other="N" choice_absolute_id="1">'+
    '            <input type="checkbox" name="checkbox">'+
    '            <div class="position-relative">'+
    '                <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项 </div>'+
    '            </div>'+
    '            <div class="option-tips"></div>'+
    '        </li>'+
    '        <li class="choice" has_other="N" choice_absolute_id="1">'+
    '            <input type="checkbox" name="checkbox">'+
    '            <div class="position-relative">'+
    '                <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项 </div>'+
    '            </div>'+
    '            <div class="option-tips"></div>'+
    '        </li>'+
    '        <li class="choice" has_other="N" choice_absolute_id="1">'+
    '            <input type="checkbox" name="checkbox">'+
    '            <div class="position-relative">'+
    '                <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项 </div>'+
    '            </div>'+
    '            <div class="option-tips"></div>'+
    '        </li>'+
    '        <li class="choice" has_other="N" choice_absolute_id="2">'+
    '            <input type="checkbox" name="checkbox">'+
    '            <div class="position-relative">'+
    '                <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项 </div>'+
    '            </div>'+
    '            <div class="option-tips"></div>'+
    '        </li>'+
    '    </ul>'+
    '    <div class="add-area visible-hide">'+
    '        <ul>'+
    '            <li class="add-choice checkbox-add-choice" title="增加" onclick="edit_addcheckbox(event)"></li>'+
    '            <li class="batch-add-choice" title="批量增加" onclick="edit_removechoice(event)" ></li>'+
    '        </ul>'+
    '    </div>'+
    '    <div class="operate visible-hide">'+
    '        <ul>'+
    '            <li class="question-delete" title="删除"></li>'+
    '        </ul>'+
    '    </div>'+
    '</div>';
var input = '<div class="topic-type-content topic-type-question after-clear operate-parent" order="3">'+
    '    <div class="question-title" type="1" name="input-question">'+
    '        <span class="required">*</span>'+
    '        <span class="question-id" page="1" index="4" absolute_id="4" question-required="Y" has_other="N" title-quote="N">Q4</span>'+
    '        <div class="position-relative">'+
    '            <div class="qs-content edit-area edit-title" contenteditable="true" content-default="1">填空题</div>'+
    '        </div>'+
    '    </div>'+
    '    <ul class="question-choice">'+
    '        <li class="textarea-parent"><textarea name="" class="multi-input"></textarea></li>'+
    '    </ul>'+
    '    <div class="operate visible-hide multi-input-margin" style="width: 50px;">'+
    '        <ul>'+
    '            <li class="question-delete" title="删除" ></li>'+
    '        </ul>'+
    '    </div>'+
    '</div>';
//问卷编辑页面
$(function (){
    $(".add-area").on("click",function(){

        $(".question-delete").on("click",function(){
            $(this).parents(".topic-type-content").remove();
        })
    });



});
function addRadio(){
    $("#question-box").append(radio)
    // console.log(333)
    $('.radio-choice-parent').hover(function(){
        var index = $(this).index();
        console.log(index)
        $(this).find(".add-area ").removeClass("visible-hide");
        $(this).find(".operate").removeClass("visible-hide");
    },function(){
        $(this).find(".add-area ").addClass("visible-hide");
        $(this).find(".operate").addClass("visible-hide");
    });
    $(".question-delete").on("click",function(){
        $(this).parents(".topic-type-content").remove();
    });
}
function addCheckbox(){
    $("#question-box").append(checkbox)
    $('.checkbox-choice-parent').each(function(index, e){
        $(this).hover(function(){
            $(this).find(".add-area ").removeClass("visible-hide");
            $(this).find(".operate").removeClass("visible-hide");
        },function(){
            $(this).find(".add-area ").addClass("visible-hide");
            $(this).find(".operate").addClass("visible-hide");
        });
    });
    $(".question-delete").on("click",function(){
        $(this).parents(".topic-type-content").remove();
    })
}
function addInput(){
    $("#question-box").append(input);
    $(".operate-parent").hover(function(){
        $(this).find(".operate").removeClass("visible-hide");
    },function(){
        $(this).find(".operate").addClass("visible-hide");
    });
    $(".question-delete").on("click",function(){
        $(this).parents(".topic-type-content").remove();
    })
}
function addRadioImg(event){
    radioImgId ++;
    $("#question-box").append(radio_img(radioImgId));
    var index = document.querySelectorAll('.survey-question-upload-img-btn').length-1;
    // console.log(index);
    $(".survey-question-upload-img-wrap").eq(index).prepend(      '       <input type="file" id="radioImg'+radioImgId+'" style="display:none;" onchange="handleFilesRadio(event)">')
    $(".operate-parent").hover(function(){
        $(this).find(".operate").removeClass("visible-hide");
    },function(){
        $(this).find(".operate").addClass("visible-hide");
    });
    $(".question-delete").on("click",function(){
        $(this).parents(".topic-type-content").remove();
    })
}
function addCheckboxImg(event){
    checkboxImgId ++;
    $("#question-box").append(checkbox_img(checkboxImgId));
    $(".operate-parent").hover(function(){
        $(this).find(".operate").removeClass("visible-hide");
    },function(){
        $(this).find(".operate").addClass("visible-hide");
    });
    $(".question-delete").on("click",function(){
        $(this).parents(".topic-type-content").remove();
    })
    var index = document.querySelectorAll('.survey-question-upload-checkbox-btn').length-1;
    // console.log(checkbox_img(checkboxImgId));
    $(".survey-question-upload-checkbox-wrap").eq(index).prepend(   '       <input type="file" id="checkboxImg'+checkboxImgId+'" style="display:none;" onchange="handleFilesCheckbox(event)">')

}

function radio_choice(){
    return '<li class="choice" has_other="N" choice_absolute_id="1">' +
        '        <input type="radio" name="radio">' +
        '        <div class="position-relative">' +
        '        <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项 </div>' +
        '        </div>' +
        '        <div class="option-tips"></div>' +
        '</li>';
}
function checkbox_choice(){
    return    '<li class="choice" has_other="N" choice_absolute_id="1">            <input type="checkbox" name="checkbox">            <div class="position-relative">            <div class="edit-area edit-child-element" contenteditable="true" content-default="1">选项 </div>            </div>            <div class="option-tips"></div>        </li>';


}
function radio_img(val){
    return '<div class="topic-type-content topic-type-question after-clear operate-parent radio-img-parent" order="4">'+
        '    <div class="question-title" type="14" name="radio-question">'+
        '        <span class="required">*</span>'+
        '        <span class="question-id"  page="1" index="8" absolute_id="8" question-required="Y" has_other="N" title-quote="N" choice-quote="0">Q8</span>'+
        '        <div class="position-relative">'+
        '            <div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1">图片单选题</div>'+
        '        </div>'+
        '    </div>'+
        '    <ul class="question-choice after-clear answer"></ul>'+
    '    <div class="add-area survey-question-upload-img-wrap" style="position: relative; left: 0px; top: 0px;">'+

        '        <label for="radioImg'+val+'" class="survey-question-upload-img-btn" ">'+
        '            <div class="survey-question-upload-img-inner">'+
        '                <img src="/public/ex/img/upload-image.png">'+
        '                <div class="survey-question-upload-img-inner-title">点击上传图片</div>'+
        '                <div class="survey-question-upload-img-inner-desc">最多可上传50张图片</div>'+
        '            </div>'+
        '        </label>' +
        '    </div>'+
        '    <div class="operate visible-hide">'+
        '        <ul>'+
        '            <li class="question-delete" title="删除"></li>'+
        '        </ul>'+
        '    </div>'+
        '</div>'
}
function checkbox_img(val){
    return '<div class="topic-type-content topic-type-question after-clear operate-parent add check-img-parent" order="5">'+
        '    <div class="question-title" type="15" name="checkbox-image">'+
        '        <span class="required">*</span>'+
        '        <span class="question-id"  page="1" index="9" absolute_id="9" question-required="Y" has_other="N" title-quote="N" choice-quote="0" min="" max="">Q9</span>'+
        '        <div class="position-relative">'+
        '            <div class="qs-content edit-area edit-title" tabindex="0" contenteditable="true" content-default="1" ;">图片多选题</div>'+
        '        </div>'+
        '    </div>'+
        '    <ul class="question-choice after-clear answer">      ' +

        '    <div class="add-area survey-question-upload-checkbox-wrap" style="position: relative; left: 0px; top: 0px;">'+

        '                 <label for="checkboxImg'+val+'" class="survey-question-upload-checkbox-btn">'+
        '            <div class="survey-question-upload-checkbox-inner">'+
        '                <img src="/public/ex/img/upload-image.png">'+
        '                <div class="survey-question-upload-checkbox-inner-title">点击上传图片</div>'+
        '                <div class="survey-question-upload-checkbox-inner-desc">最多可上传50张图片</div>'+
        '            </div>'+
        '        </label>' +
        '    </div>'+
        '    <div class="operate visible-hide" >'+
        '        <ul>'+
        '            <li class="question-delete" title="删除"></li>'+
        '        </ul>'+
        '    </div>'+
        '</div>';
}

var questionType = "";
var radioImgId = 0;
var checkboxImgId = 0;




var Aarr = ['A','B','C','D','E',"F"];
function edit_addchoice(event){
    var index = $('.radio-add-choice').index($(event.target));
    var aa = $(".radio-choice-parent").eq(index).find(".option-tips").length;
    console.log(aa);
    $(".radio-choice-parent").eq(index).find(".question-choice").append(radio_choice());
}
function edit_removechoice(event){
    var index = $('.batch-add-choice').index($(event.target));
    console.log(index);
    $(".add-choice-parent").eq(index).find(".choice").last().remove();
}
function edit_addcheckbox(event){
    var index = $('.checkbox-add-choice').index($(event.target));
    var bb = $(".checkbox-choice-parent").eq(index).find(".option-tips").length;
    $(".checkbox-choice-parent").eq(index).find(".question-choice").append(checkbox_choice());
}

function radioImgChoice(radioSrc){
    return '<li class="choice survey-question-radio-img" has_other="N" choice_absolute_id="2">'+
        '    <div class="survey-question-radio-choice edit-area-active">'+
        '        <div class="survey-question-radio-choice-img">'+
        '            <a class="remove-child-element survey-question-radio-img-remove" onclick="removeImage(event)" style="display: block;"></a>'+
        '            <label id="label" for="file" class="imgfile">'+
        '            <img class="img" src="  ' + radioSrc + ' " alt="" class="imgRadio">'+
        '            </label>'+
        '        </div>'+
        '        <div class="survey-question-radio-choice-text">'+
        '           <input type="radio" name="radio"><label class="edit-area edit-child-element" contenteditable="true">选项1</label>'+
        '            <div class="option-tips">'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</li>'

}
function checkboxImgChoice(checkboxSrc){
    return '<li class="choice survey-question-checkbox-img" has_other="N" choice_absolute_id="2">'+
        '    <div class="survey-question-checkbox-choice edit-area-active">'+
        '        <div class="survey-question-checkbox-choice-img">'+
        '            <a class="remove-child-element survey-question-checkbox-img-remove" onclick="removeImage(event)" style="display: block;"></a>'+
        '            <label id="label" for="file" class="imgfile">'+
        '            <img class="img" src="  ' + checkboxSrc + ' " alt="" class="imgCheckbox">'+
        '            </label>'+
        '        </div>'+
        '        <div class="survey-question-checkbox-choice-text">'+
        '            <input type="checkbox" name="checkbox"><label class="edit-area edit-child-element" contenteditable="true">选项1</label>'+
        '            <div class="option-tips">'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</li>'

}
var radioSrc = "";
var checkboxSrc = "";
function handleFilesRadio(event){
    var img = document.querySelectorAll('.imgRadio');
    var dom = event.target;
	var fd = new FormData();
    for(var i = 0;i < dom.files.length;i++){
        var file = dom.files[i];
        
        fd.append('file',file);
       // url=window.URL.createObjectURL(file); // 得到bolb对象路径，可当成普通的文件路径一样使用，赋值给src;

        // img[i].src=url;
        var index = $(event.target).index();
        // console.log(index)
        var cc = $(".radio-img-parent").eq(index).find(".choice").length;
       // $(event.target).parents(".radio-img-parent").find(".answer").before(radioImgChoice());
		
    }
	$.ajax({
            url : '/examination/index/files',
            type : 'post',
            data : fd,
            contentType : false,
            processData : false,
            cache : false,
            success : function (url) {
                if(url.code == 200){
					//console.log(url.data.image)
					//img[0].src=url.data.image;
					//console.log(img)
                   // radioSrc = url.data.image;
					//url=window.URL.createObjectURL(img)
					console.log(radioImgChoice(url.data.image))
					$(event.target).parents(".radio-img-parent").find(".answer").before(radioImgChoice(url.data.image));
                }else{
                    console.log(url);return false;
                }
            }
        });
}

function handleFilesCheckbox(event){
    var img = document.querySelectorAll('.imgCheckbox');
    var dom = event.target;
	 var fd = new FormData();
    //console.log(event.target);
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
                    // console.log(url.data.image)
                  //  checkboxSrc = url.data.image;

				$(event.target).parents(".check-img-parent").find(".answer").before(checkboxImgChoice(url.data.image));
                }else{
                    console.log(url);return false;
                }
            }
        });
	
}
function removeImage(event){
    var index = $(".survey-question-radio-img-remove").index($(event.target));
    $(".survey-question-radio-img").eq(index).remove()
    var index1 = $(".survey-question-checkbox-img-remove").index($(event.target));
    $(".survey-question-checkbox-img").eq(index1).remove()
}

function previewAll(){

    $(".rows2").prepend('<div class="back-survey dib vm mr10">'+
        '                                <input type="button" class="bce-ui-button btn-back" value="返回" onclick="back()">'+
        '                            </div>')
    $('.rows1').css("display","none");
    $('.navigation').css("display","none");
    $(".title-content").css("margin-top","10px");
    $("[contenteditable]").attr("contenteditable","false");
    $(".preview-survey .btn-lg").css("display","none");
    $(".survey-question-upload-checkbox-wrap").css("display","none");
    $(".survey-question-upload-img-wrap").css("display","none");

}
function back(){
    $(".back-survey").remove();
    $('.rows1').css("display","block");
    $('.navigation').css("display","block");
    $(".title-content").css("margin-top","0");
    $("[contenteditable]").attr("contenteditable","true");
    $(".preview-survey .btn-lg").css("display","block");
    $(".survey-question-upload-checkbox-wrap").css("display","block");
    $(".survey-question-upload-img-wrap").css("display","block");

}
function submitAll(){
    var questionData = {};
    var length = $(".topic-type-content").length;
    questionData["questionType"] = questionType;//问卷or试卷
    var txt=[];
    var totalTitle = $(".title-content").html();//标题
    var totalScribe = $(".desc-content").html();//描述
    //txt.push(totalTitle);//问卷标题
    questionData["totalTitle"] = totalTitle;
    //txt.push(totalScribe);//问卷描述
    questionData["totalScribe"] = totalScribe;
    for(var i = 0;i<length;i++){
        var order= $(".topic-type-content").eq(i).attr("order");
        order =  parseInt(order);


        switch(order){
            case 1://单选题
                var radioContent=[];
                var radioTitle = [];
                var title = $(".topic-type-content").eq(i).find(".edit-title").html();
                var answer = $(".topic-type-content").eq(i).find(".edit-answer").html();
                radioTitle[i]= title;
                for(var j = 0;j<$(".topic-type-content").eq(i).find(".choice").length;j++){
                    var c=$(".topic-type-content").eq(i).find(".choice").eq(j).find(".edit-child-element").html();
                    radioContent[j]=c
                }
                var datas={};
                datas['order']=order;//题目类型
                datas['title']=title;//题目
                datas['content']=radioContent;//选项
                datas['questionNumber'] = i+1;//题号
                datas['answer'] = answer;
                //var aa=window.JSON.stringify(datas);
                // console.log(datas);
                //alert(title)
                //console.log(radioContent)
                txt.push(datas);

                break;
            case 2://多选题
                var checkboxContent = [];
                var checkboxTitle = [];
                var title = $(".topic-type-content").eq(i).find(".edit-title").html();
                var answer = $(".topic-type-content").eq(i).find(".edit-answer").html();
                checkboxTitle[i]= title;
                for(var j = 0;j<$(".topic-type-content").eq(i).find(".choice").length;j++){
                    var c=$(".topic-type-content").eq(i).find(".choice").eq(j).find(".edit-child-element").html();
                    checkboxContent[j]=c;
                }
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
                var title = $(".topic-type-content").eq(i).find(".edit-title").html();
                var answer = $(".topic-type-content").eq(i).find(".edit-answer").html();
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
                var title = $(".topic-type-content").eq(i).find(".edit-title").html();
                var answer = $(".topic-type-content").eq(i).find(".edit-answer").html();
                radioImgTitle[i]= title;
                for(var j = 0;j<$(".topic-type-content").eq(i).find(".choice").length;j++){
                    var b=$(".topic-type-content").eq(i).find(".choice").eq(j).find(".imgfile img").attr("src");
                    var c=$(".topic-type-content").eq(i).find(".choice").eq(j).find(".edit-child-element").html();
                    radioImgContent[j]=c;
                    radioImgSrc[j]=b;
                }
                var datas={};
                datas['order']=order;//题目类型
                datas['title']=title;//题目
                datas['questionNumber'] = i+1;//题号
                datas['content']=radioImgContent;//选项
                datas['src']=radioImgSrc;//图片地址
                datas['answer'] = answer;
                // console.log(datas);
                txt.push(datas);
                break;
            case 5://图片多选题
                var checkImgTitle = [];
                var checkImgContent = [];
                var checkImgSrc = [];
                var title = $(".topic-type-content").eq(i).find(".edit-title").html();
                var answer = $(".topic-type-content").eq(i).find(".edit-answer").html();
                checkImgTitle[i]= title;
                for(var j = 0;j<$(".topic-type-content").eq(i).find(".choice").length;j++){
                    var b=$(".topic-type-content").eq(i).find(".choice").eq(j).find(".imgfile img").attr("src");
                    var c=$(".topic-type-content").eq(i).find(".choice").eq(j).find(".edit-child-element").html();
                    checkImgContent[j]=c;
                    checkImgSrc[j]=b;
                }
                var datas={};
                datas['order']=order;//题目类型
                datas['title']=title;//题目
                datas['questionNumber'] = i+1;//题号
                datas['content']=checkImgContent;//选项
                datas['src']=checkImgSrc;//图片地址
                datas['answer'] = answer;
                // console.log(datas);
                txt.push(datas);
                break;
            default:
                alert("error")
        }
    }
    questionData["question"] = txt;
    window.JSON.stringify(questionData)
    // console.log(radioTitle)
    //console.log(questionData)
    $.ajax({
        type:"post",
        url:"/examination/index/paper",
        data:questionData,
       // dataType:"jsonp",
        //jsonp: "callbackparam",
        success:function(msg){
            console.log(msg)
        }});
}


