import 'paginationjs';
import '@common/pagination/pagination.scss';

$(function() {
  (function() {
    var container = $('.pagination__paging');
    var sources = function () {
      var result = [];
      for (var i = 1; i < 175; i++) {
        result.push(i);
      }
      return result;
    }();
    var options = {
      dataSource: sources,
      pageSize: 12,
      pageRange: 1,
      showNavigator: true,
      formatNavigator: function(currentPage, totalPage, totalNumber){
        var lastNumberForCurrentPage = currentPage * 12;
        var firstNumberForCurrentPage = lastNumberForCurrentPage - 11;
        var totalNumberStr = '';
        function countDigits(n) {
          for(var i = 0; n > 1; i++) {
             n /= 10;
          }
          return i;
       }
       var countDigitsIntotalNumber = countDigits(totalNumber);
        if (countDigitsIntotalNumber > 1) {
          var n = Math.pow(10, countDigitsIntotalNumber-1);
          totalNumberStr = Math.floor(totalNumber/ n) * n + "+";
        }
        else {
          totalNumberStr = totalNumber;
        }
        var formatNavigatorStr = firstNumberForCurrentPage + ' - ' + lastNumberForCurrentPage + ' из ' + totalNumberStr + ' вариантов аренды';
        return formatNavigatorStr;
      },
      showPrevious: false,
      autoHideNext: true,
      nextText: '',
      callback: function (response, pagination) {
        // window.console && console.log(response, pagination);
        var dataHtml = '';
        $.each(response, function (index, item) {
          dataHtml += '<li>' + item + '</li>';
        });
        container.prev().html(dataHtml);
      }
    };

    //$.pagination(container, options);

    // container.addHook('beforeInit', function () {
    //   window.console && console.log('beforeInit...');
    // });
    container.pagination(options);

    // container.addHook('beforePageOnClick', function () {
    //   window.console && console.log('beforePageOnClick...');
    //   //return false
    // });
  })();
})
