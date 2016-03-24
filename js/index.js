angular.module('myApp', ['mgcrea.ngStrap'])
  .controller('MainController', function() {
    var now = new Date();
    this.currentdate = comDateFormat(now, "yyyy年MM月dd日");
    this.reserves = [{
      date: "2016年03月23日",
      start: "15:00",
      end: "17:00",
      id: "0001",
      name: "富塚陽子ちゃん"
    }, {
      date: "2016年03月23日",
      start: "15:00",
      end: "17:00",
      id: "0002",
      name: "富塚陽太くん"
    }, {
      date: "2016年03月24日",
      start: "15:00",
      end: "17:00",
      id: "0003",
      name: "富塚祐太くん"
    }, {
      date: "2016年03月24日",
      start: "15:00",
      end: "17:00",
      id: "0002",
      name: "富塚たくまくん"
    }];
    this.nextDay = function(){
      now.setDate(now.getDate() + 1);
      this.currentdate = comDateFormat(now, "yyyy年MM月dd日");
    }
    this.preDay = function(){
      now.setDate(now.getDate() - 1);
      this.currentdate = comDateFormat(now, "yyyy年MM月dd日");
    }
  });
