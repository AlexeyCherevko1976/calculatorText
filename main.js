;(function() {

  // calc - основная функция для библиотеки
  function calc(value) {
    // ...
  }

  // вспомогательная переменная
  var version = '1.1.1';   //
  // ... другие вспомогательные переменные и функции

  function stringExpession(name) {
   
      this.name = name;
      this.string=undefined;
      this.value=undefined;
      this.countSimple=function(){
            //console.log('this.string='+this.string);
            var answer=countSimple(this.string);
            this.value=answer[0];
            this.string=answer[1];
            //return this.value*/
      }

  }

  function countSimple(string){
       //console.log('string='+string);
       var clipString=clipExpression(string)+'';
       //console.log('clipString='+clipString);
       var trigString=trigExpression(clipString);

       try{
          var sum = new Function('', ' return '+trigString+'; ');
  
          var result = sum();
       } catch (e){
          var result='error string';
       }
       var string=clipString+"="+result;
       //console.log(result);
       return [result, string]
  }

  function clipExpression(string){
      // function countSimple(string){
      var regExp=/=/;
      var ind1=string.search(regExp);
      if (!ind1){
          //console.log(ind1);
      }
      var strPE=string.replace(/=.*/,'')
      //console.log('strPE='+strPE);
      
       return strPE+'' 
  }

  function trigExpression(clipString){
       //console.log('clipString1='+clipString);
       
       var clipString=clipString.replace(/Math\./g,'');
       var clipString=clipString.replace(/asin/g,'asn');
       var clipString=clipString.replace(/acos/g,'acs');
       var clipString=clipString.replace(/atan/g,'atn');

       var clipString=clipString.replace(/sin/g,'Math.sin');
       var clipString=clipString.replace(/cos/g,'Math.cos');
       var clipString=clipString.replace(/tan/g,'Math.tan');

       var clipString=clipString.replace(/asn/g,'Math.asin');
       var clipString=clipString.replace(/acs/g,'Math.acos');
       var clipString=clipString.replace(/atn/g,'Math.atan');

       var clipString=clipString.replace(/pow/g,'Math.pow');
       var clipString=clipString.replace(/log/g,'Math.log');
       var clipString=clipString.replace(/exp/g,'Math.exp');
       var clipString=clipString.replace(/sqrt/g,'Math.sqrt');
       

       //var clipString=clipString.replace(/?asin/g,'Math.asin');
       
       //console.log('clipString2='+clipString);
       return clipString
  }

  // код функции size, пока что доступен только внутри
  function square(number) {
    return number*number;
  }

  // присвоим в lodash size и другие функции, которые нужно вынести из модуля
  calc.stringExpession = stringExpession;
  calc.square = square;
  calc.countSimple=countSimple;
  
  // calc.defaults = ...
  // calc.cloneDeep = ...

  // "экспортировать" calc наружу из модуля
  //window.calc = calc; // в оригинальном коде здесь сложнее, но смысл тот же
  module.exports.calc=calc;
}());

//alert('dds');

