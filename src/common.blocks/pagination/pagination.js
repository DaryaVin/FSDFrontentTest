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
    var arrow = '<svg class="arrowForward" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 0.426758L17.0156 8.44238L9 16.458L7.59375 15.0518L13.1719 9.42676H0.984375V7.45801H13.1719L7.59375 1.83301L9 0.426758Z" fill="white"/></svg>';
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
      nextText: arrow,
      callback: function (response, pagination) {
        window.console && console.log(response, pagination);

        var dataHtml = '';

        $.each(response, function (index, item) {
          dataHtml += '<li>' + item + '</li>';
        });
        container.prev().html(dataHtml);
      }
    };

    //$.pagination(container, options);

    container.addHook('beforeInit', function () {
      window.console && console.log('beforeInit...');
    });
    container.pagination(options);

    container.addHook('beforePageOnClick', function () {
      window.console && console.log('beforePageOnClick...');
      //return false
    });
  })();
})
