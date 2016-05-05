function mainCtrl($http, $uibModal){

  var that = this;
  var now = new Date();
  this.currentdate = comDateFormat(now, "yyyy年MM月dd日");
  // this.reserves = [{
  //   date: "2016年05月03日",
  //   start: "15:00",
  //   end: "17:00",
  //   id: "0001",
  //   name: "富塚陽子ちゃん"
  // }, {
  //   date: "2016年05月04日",
  //   start: "15:00",
  //   end: "17:00",
  //   id: "0002",
  //   name: "富塚陽太くん"
  // }, {
  //   date: "2016年05月04日",
  //   start: "15:00",
  //   end: "17:00",
  //   id: "0003",
  //   name: "富塚祐太くん"
  // }, {
  //   date: "2016年05月05日",
  //   start: "15:00",
  //   end: "17:00",
  //   id: "0002",
  //   name: "富塚たくまくん"
  // }];
that = this;
  $http({
        method: 'GET',
        // url: 'http://localhost:3000/api/test'
        url: 'https://nameless-meadow-41004.herokuapp.com/api/test'
      })
      // 成功時の処理（ページにあいさつメッセージを反映）
      .success(function(data, status, headers, config){
        that.reserves = data;
      })
      // 失敗時の処理（ページにエラーメッセージを反映）
      .error(function(data, status, headers, config){
      });

  this.nextDay = function(){
    now.setDate(now.getDate() + 1);
    this.currentdate = comDateFormat(now, "yyyy年MM月dd日");
  };
  this.preDay = function(){
    now.setDate(now.getDate() - 1);
    this.currentdate = comDateFormat(now, "yyyy年MM月dd日");
  };
  this.openModal = function(mode){
    var modalInstance  = $uibModal.open({
      templateUrl: "insert.html",
      controller: "ModalController",
      controllerAs: "ModalCtrl",
      size: "lg",
      backdrop:"static",
      resolve: {
          data: function() {
            return {
              currentdate: that.currentdate
            };
          }
        }
    });
    modalInstance.result.then(function(results) {
        this.reserves.push(results);
      }, function() {
    });
  };
}

function modalCtrl($uibModalInstance,data)
{
  this.date = data.currentdate;
  this.ok = function(){
    var results = {
      date: this.date,
      start: this.start,
      end: this.end,
      id: this.id,
      name: this.name
    };
    $uibModalInstance.dismiss(results);
  };
  this.cancel = function(){
    $uibModalInstance.dismiss();
  };
  // this.datePickerOpen = false;
  // this.toggleDatePicker = function($event){
  //   // これが重要！！！
  //   $event.stopPropagation();
  //   this.datePickerOpen = !this.datePickerOpen;
  // };
}

angular.module('myApp', ['ui.bootstrap'])
.controller('MainController',['$http', '$uibModal', mainCtrl])
.controller('ModalController', ['data','$uibModalInstance', modalCtrl]);
