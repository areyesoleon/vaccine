var QpayRadar = {
  hash: (function () {
    function hash() {
      if (document.addEventListener) {
        console.log('aqui');
        window.fpLayer = window.fpLayer || [];
        function fpa() { fpLayer.push(arguments); }
        fpa('config', 'client', 'cUXvdB6hHu');
        fpa('config', 'loaded', function (fp) {
          console.log(fp);
          fp.send().then(function (data) {
            console.log(data.visitorId);
            console.log(window.fpLayer);
            /*if(!getParameterByName('fingerId')){
                window.location.href = window.location.href + "?fingerId=" + data.visitorId;
            }*/
          })
        });
      }
    }
    return hash;
  })(),
};