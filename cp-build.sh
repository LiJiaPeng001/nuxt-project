#!/bin/sh

# 打包文件夹
distPath="website";

# 清空打包文件夹
clearDist() {
   echo "【exec】删除打包文件 $distPath ...";
   rm -fr $distPath/.nuxt
   rm -fr $distPath/node_modules
}

# 整理大包目录
copyDist() {
  echo "【exec】正在复制文件 ...";
  mkdir -p $distPath;
  # docker容器不兼容
  # cp -a {.nuxt,static,server,*.js,*.json,*.lock} website
  cp -a .nuxt $distPath/
  cp -a static $distPath/
  cp -a contants $distPath/
  cp -a *.js $distPath/
  cp -a *.lock $distPath/
  cp -a *.json $distPath/
  # cp -a node_modules $distPath/
}

clearDist;

copyDist;

echo "复制website到服务器：npm run start";

scp -r $distPath root@47.97.109.250:/var/www/nuxt-project