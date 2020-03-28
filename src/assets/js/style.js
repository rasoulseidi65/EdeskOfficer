window.onload=function() {
    $(document).on('show.bs.modal','.modal', function(e){
        $(e.relatedTarget.attributes['data-target'].value).appendTo('body');
    });

}

function PreviewImage() {
  pdffile=document.getElementById("files").files[0];
  pdffile_url=window.URL.createObjectURL(pdffile);
  $('#viewer').attr('src',pdffile_url);
}

