module.exports = function toReadable (number) {
   let result = '';
   let a = String(number).split('').reverse();

   if (a.length === 1 && a[0] === '0') {
      result = 'zero';
   }

   switch (a[0]) {
      case '1':
         result = `one${result}`;
         break;
      case '2':
         result = `two${result}`;
         break;
      case '3':
         result = `three${result}`;
         break;
      case '4':
         result = `four${result}`;
         break;
      case '5':
         result = `five${result}`;
         break;
      case '6':
         result = `six${result}`;
         break;
      case '7':
         result = `seven${result}`;
         break;
      case '8':
         result = `eight${result}`;
         break;
      case '9':
         result = `nine${result}`;
         break;
      default:
         result = `${result}`;
   }

   switch (a[1]) {
      case '1':
         switch (a[0]) {
            case '0':
               result = `ten`;
               break;
            case '1':
               result = `eleven`;
               break;
            case '2':
               result = `twelve`;
               break;
            case '3':
               result = `thirteen`;
               break;
            case '4':
               result = `fourteen`;
               break;
            case '5':
               result = `fifteen`;
               break;
            case '6':
               result = `sixteen`;
               break;
            case '7':
               result = `seventeen`;
               break;
            case '8':
               result = `eighteen`;
               break;
            case '9':
               result = `nineteen`;
               break;
            default:
               result = `${result}`;
         }
         break;

      case '2':
         result = `twenty ${result}`;
         break;
      case '3':
         result = `thirty ${result}`;
         break;
      case '4':
         result = `forty ${result}`;
         break;
      case '5':
         result = `fifty ${result}`;
         break;
      case '6':
         result = `sixty ${result}`;
         break;
      case '7':
         result = `seventy ${result}`;
         break;
      case '8':
         result = `eighty ${result}`;
         break;
      case '9':
         result = `ninety ${result}`;
         break;
      default:
         result = `${result}`;
   }

   switch (a[2]) {
      case '1':
         result = `one hundred ${result}`;
         break;
      case '2':
         result = `two hundred ${result}`;
         break;
      case '3':
         result = `three hundred ${result}`;
         break;
      case '4':
         result = `four hundred ${result}`;
         break;
      case '5':
         result = `five hundred ${result}`;
         break;
      case '6':
         result = `six hundred ${result}`;
         break;
      case '7':
         result = `seven hundred ${result}`;
         break;
      case '8':
         result = `eight hundred ${result}`;
         break;
      case '9':
         result = `nine hundred ${result}`;
         break;
      default:
         result = `${result}`;
   }

   return result.trim();
}
