
$(function() {
  $('#IranMap .map .province path').click(function() {
    var province = $(this).attr('class');
    var provinceName = $('#IranMap .list>ul>li>ul>li.' + province + ' a').html();
    if (provinceName) {
      $('#IranMap .city').html('نمایش شهرهای استان ' + provinceName);
    }
  });
  $('#IranMap .list li.province>ul>li>a').click(function(e) {
    var provinceName = $(this).html();
    if (provinceName) {
      $('#IranMap .city').html('نمایش شهرهای استان ' + provinceName);
    }
    e.preventDefault();
  });
});
