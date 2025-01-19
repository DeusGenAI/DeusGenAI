module.exports = {
    plugins: {
        tailwindcss: {},
        // 兼容浏览器，添加前缀
        'autoprefixer': {
        },
        // 'postcss-pxtorem': {
        //     rootValue: 43, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
        //     unitPrecision: 3, //允许REM单位增长到的十进制数字,小数点后保留的位数。
        //     propList: ['*'],
        //     exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
        //     selectorBlackList: ['.radius'], //要忽略并保留为px的选择器
        //     mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
        //     minPixelValue: 5, //设置要替换的最小像素值(3px会被转rem)。 默认 0
        //     replace: false, //转成rem后，不保留px
        //     minPixelValue: 12, //px小于12的不会被转换
        // },
/*        'postcss-px-to-viewport-8-plugin':{
            unitToConvert: 'px',
            viewportWidth: 750,
            // viewportWidth: file => {
            //   let num = 1600;
            //   if (file.indexOf('vant') !== -1 ) {
            //     num = 800;
            //   }
            //   return num;
            // },
            unitPrecision: 3, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportUnit: 'rem', // 希望使用的视口单位
            fontViewportUnit: 'rem', // 字体使用的视口单位
            selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: true, // 媒体查询里的单位是否需要转换单位
            replace: true, //  是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules\/element-plus/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            // include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
            // landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            // landscapeUnit: 'vw', // 横屏时使用的单位
            // landscapeWidth: 1024, // 横屏时使用的视口宽度
        }*/
    },
  };
