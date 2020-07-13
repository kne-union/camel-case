/**
 * @name: camel-case ;
 * @author: linzp ;
 * @description: 将字符串转化成驼峰 ;
 * */

export default (name, caseStyle = 'lower') => {
	if(!/^[a-z][a-z0-9_-]*$/i.test(name)){
		console.log('errr')
		throw new Error(`${name} is not validate`)
	}
	name = name.replace(/[_-][a-z]/ig, s => s.substring(1).toUpperCase())
	let first = name[0]
	switch(caseStyle){
		case 'lower':
			first = first.toLowerCase()
			break;
		case 'upper':
			first = first.toUpperCase()
			break;
		default: 
	}
	return first + name.slice(1)
};
