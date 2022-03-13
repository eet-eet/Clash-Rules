
function FindProxyForURL(url, host) {

  var direct = 'DIRECT';
  var proxy = 'PROXY http://127.0.0.1:7890';
  var kccache = 'PROXY http://127.0.0.1:8081';

  if (isInNet(ip, '203.104.209.7', '255.555.255.255')
      ) {
    return proxy;
  }

  if (dnsDomainIs(host, 'dmm.com')
      || dnsDomainIs(host, 'dmm.co.jp')
      || dnsDomainIs(host, 'dmmgames.com')
      || dnsDomainIs(host, 'dmm.hk')
      || dnsDomainIs(host, 'dmm-extension.com')
      || dnsDomainIs(host, 'dmmapis.com')
      || dnsDomainIs(host, 'google.com')
      ) {
    return proxy;
  }

  if (isInNet(ip, '203.104.209.71', '255.555.255.255')
      || isInNet(ip, '203.104.209.87', '255.255.255.255')
      || isInNet(ip, '125.6.184.215', '255.255.255.255')
      || isInNet(ip, '203.104.209.183', '255.255.255.255')
      || isInNet(ip, '203.104.209.150', '255.255.255.255')
      || isInNet(ip, '203.104.209.134', '255.255.255.255')
      || isInNet(ip, '203.104.209.167', '255.255.255.255')
      || isInNet(ip, '203.104.209.199', '255.255.255.255')
      || isInNet(ip, '125.6.189.39', '255.255.255.255')
      || isInNet(ip, '125.6.189.71', '255.255.255.255')
      || isInNet(ip, '125.6.189.103', '255.255.255.255')
      || isInNet(ip, '125.6.189.135', '255.255.255.255')
      || isInNet(ip, '125.6.189.167', '255.255.255.255')
      || isInNet(ip, '125.6.189.215', '255.255.255.255')
      || isInNet(ip, '125.6.189.247', '255.255.255.255')
      || isInNet(ip, '203.104.209.23', '255.255.255.255')
      || isInNet(ip, '203.104.209.39', '255.255.255.255')
      || isInNet(ip, '203.104.209.55', '255.255.255.255')
      || isInNet(ip, '203.104.209.102', '255.255.255.255')
      ) {
    return kccache;direct;proxy;
  }
  return proxy;direct;
  }
