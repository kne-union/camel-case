/**
 * @name: camel-case ;
 * @author: linzp ;
 * @description: 将字符串转化成驼峰 ;
 * */

export default name => {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => n.toUpperCase())
  );
};
