import District from 'ydui-district/dist/jd_province_city_area';

export const formatCityData = (cityArray:any) => {
  const temp:any = [];

  for (let i = 0; i < cityArray.length; i++) {
    temp[i] = {
      value: cityArray[i].n,
      label: cityArray[i].n,
    };
    if (cityArray[i].c && cityArray[i].c instanceof Array) {

      temp[i].children = formatCityData(cityArray[i].c);
    }
  }
  return temp;
};
export const formatProduct= (cityArray:any)=>{
  const temp:any = [];
  let num = 1;
  for (let i = 0; i < cityArray.length; i++) {
    temp[i] = {
      value: cityArray[i].n,
      label: cityArray[i].n,
    };
    if (cityArray[i].c && cityArray[i].c instanceof Array&&num<1) {
      temp[i].children = formatCityData(cityArray[i].c);
    }
  }
  return temp;
}
export const formatProductDetail= (cityArray:any)=>{
  const temp:any = [];
  let num = 1;
  for (let i = 0; i < cityArray.length; i++) {
    temp[i] = {
      value: cityArray[i].n,
      label: cityArray[i].n,
    };
    num+=2
    if (cityArray[i].c && cityArray[i].c instanceof Array&&num<2) {
      temp[i].children = formatCityData(cityArray[i].c);
    }
  }
  return temp;
}
export const cityData = formatCityData(District);

 
