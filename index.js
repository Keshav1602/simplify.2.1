console.log('Temperature Converters');



function cToF(C) 
{
  var cTemp = C;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(F) 
{
  var fTemp = F;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'F is ' + fToCel + 'C.';
    console.log(message);
} 

function cToK(C) 
{
  var cTemp = C;
  var cTokelvin = cTemp + 273;
  var message = cTemp+'C is ' + cTokelvin + ' K.';
    console.log(message);
}

function kToC(K) 
{
  var kTemp = K;
  var kToCel = kTemp-273;
  var message = kTemp+'K is ' + kToCel + 'C.';
    console.log(message);
}

function fToK(F) 
{
  var fTemp = F;
  var fToK = ((fTemp - 32) * 5 / 9)+273;
  var message = fTemp+'F is ' + fToK + 'K.';
    console.log(message);
} 

function kToF(K) 
{
  var kTemp = K;
  var kToF = (kTemp-273) * 9 / 5 + 32;
  var message = kTemp+'K is ' + kToF + 'C.';
    console.log(message);
}


kToF(100);