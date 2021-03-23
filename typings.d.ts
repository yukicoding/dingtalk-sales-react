declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
declare module 'ydui-district/dist/gov_province_city_area_id'

type Orders = {
  name:string,
  city:string,
  id_type:string,
  id_num:string,
  phone:string,
  email_area:string,
  product:string,
  blood_type:string,
  address:string,
  disease:string,
  organization:string,
  diagnosis:string,
  orgin_price:string,
  order_price:string,
  report_price:string,
  recive_price:string
}