export class MyNumberFormatter
{
  defaultFormat(number){
    return new Intl.NumberFormat("pt-PT", {
      minimumFractionDigits: 2,
    }).format(number);
  }
}
