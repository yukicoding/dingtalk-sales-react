import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes:[
  //   {exact:true, path:'/',component:'@/pages/home'}
  // ],
  fastRefresh: {},
});
