/**
 * Created by Bjike on 2017/9/11.
 */
$(function(){
    $(".figure").hover(function(){
        $(this).css("border", "2px solid #1ea0fa").siblings(".figure").css("border", "2px solid transparent");
        $(this).find(".survey-icon").removeClass("survey-icon").addClass("survey-icon2");
    });
    $(".btn-create").hover(function(){
       $(this).css({"background":"#1ea0fa","color":"#fff"})
    },function(){
        $(this).css({"background":"#fff","color":"#1ea0fa"})
    })
    /*$(".figure-survey").hover(function(){
        $(".survey-icon").removeClass("survey-icon").addClass("survey-icon2");
        $(".vote-icon").removeClass("vote-icon2").addClass("vote-icon");
    })
    $(".vote-survey").hover(function(){
        $(".survey-icon").removeClass("survey-icon2").addClass("survey-icon");
        $(".vote-icon").removeClass("vote-icon").addClass("vote-icon2");
    }),*/

// 导航栏
        $(".select-question-title").toggle(function(){
        $(".module").css("display","block");
        $(this).removeClass("select-question-title").addClass("select-question-title2");
    },function(){
        $(".module").css("display","none");
        $(this).removeClass("select-question-title2").addClass("select-question-title");
    })
    $(".common-questions-title").toggle(function(){
        $(".common_question").css("display","block");
        $(this).removeClass("common-questions-title").addClass("common-questions-title2");
    },function(){
        $(".common_question").css("display","none");
        $(this).removeClass("common-questions-title2").addClass("common-questions-title");
    })


})
// angular.module('App',['ngRoute'])
//     .config(['$routeProvider', function($routeProvider){
//         $routeProvider
//             .when('/test',{templateUrl:'test.html'})
//             .otherwise({redirectTo:'/'});
//     }]);