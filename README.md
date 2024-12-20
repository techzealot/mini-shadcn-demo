# React + TypeScript + Vite + tailwindcss
## just for fun,don't use in production
1. 本项目是一个简化版模仿shadcn/ui的ui组件库(主要实现theme,Button,Text,Dialog,Card),主要目的用于学习shadcn/ui实现原理以及ui库的打包发布等知识
2. 技术栈:React + TypeScript + Vite + tailwindcss + Storybook
3. 与shadcn/ui区别在于本项目最终实现为一个通过npm安装的依赖库模式,所有除react运行依赖外包括css已全部打包,无需额外依赖
4. 相关css通过插件已与组件打包在一起,无需单独引入
5. 使用无依赖库模式优点是使用者无需引入tailwind,缺点是如果使用者也使用相关库(如clsx,tailwind-merge)有些代码会重复打包进最终产物


还有另一种库的发布模式:

css不进行预处理,由使用者自行安装并配置tailwindcss,并把组件路径配置在tailwind.config.js中,此种模式处理起来比较麻烦,难以处理库的tailwind配置,如自定义主题等,除非手动拷贝,这也是shadcn选择copy/paste模式的原因