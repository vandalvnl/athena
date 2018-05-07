var Regex = function() {
	var regex = {
		brazilianName: /^[A-ZÇa-zç 'ÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÃẼĨÕŨãẽĩõũ]{1,205}$/,
		email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		username: /^[a-z_\-0-9]{1,64}$/,
		password: /^[a-zA-Z_\-0-9()"'!@#$%&*+=\\]{1,256}$/,
		rfcLink: /^(http(|s):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/,
		cep: /^\d{5}(|-)\d{3}$/,
		cpf: /^((\d{3})(|\.)){2}(\d{3})(|-)\d{2}$/,
		rg: /^([A-Z]{2}|\d{1,3})(|-)\d{2}((|\.)\d{3}){2}$/,
		cellphoneGeneric: /^(\+\d{3}|0\d{2}|\d{2})(| )(\d){1,3}( |)(\d){1,5}(| )(\d){1,4}(|$| )(\d){1,4}$/,
		brazilianCellphone: /^(|\+55)(| )(0(| )\d{2}|\d{2})(| )9(| )\d{4}(| |-| - )\d{4}$/,
		brazilianCellphoneWithDDD: /^(|(|\+55)(| )(0(| )\d{2}|\d{2})(| ))9(| )\d{4}(| |-| - )\d{4}$/,
		brazilianCellphoneWithoutDDD: /^(|0\d{2}|\d{2})(| )\d{4}(| |-| - )\d{4}$/,
		monetary: /^[A-Za-z]{1,3}\$(| )[0-9,.]{1,99}($|,|.)\d{1,99}$/,
		ipv4: /^(((1\d|[1-9]?)\d|2([0-4]\d|5[0-5]))\.){3}((1\d|[1-9]?)\d|2([0-4]\d|5[0-5]))$/,
		ipv6: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}\d){0,1}\d)\.){3,3}(25[0-5]|(2[0-4]|1{0,1}\d){0,1}\d)|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}\d){0,1}\d)\.){3,3}(25[0-5]|(2[0-4]|1{0,1}\d){0,1}\d))$/,
		dayMouthYear: /^(0[1-9]|(1|2)\d|3[01])(\/|-| )(0[1-9]|1[012])(\/|-| )(19|20)\d{2}$/,
		mouthDayYear: /^(0[1-9]|1[012])(\/|-| )(0[1-9]|(1|2)\d|3[01])(\/|-| )(19|20)\d{2}$/,
		dayMonthYearWithMonthValidation: /^((0[1-9]|1\d|2\d|3[01](\/|-| )(0[13578]|1[02]))|0[1-9]|(1|2)\d|30(\/|-| )(0[469]|11)|0[1-9]|2\d(\/|-| )(|0)2)(\/|-| )(19|20)\d{2}$/,
		monthDayYearWithMonthValidation: /^((|2)(\/|-| )(0[1-9]|(1|2)\d)|(0[469]|11)(\/|-| )(0[1-9]|(1|2)\d|3[0-1])|(0[13578]|1[02])(\/|-| )(0[1-9]|(1|2)\d|3[01]))(\/|-| )(19|20)\d{2}$/,
		brazilianCarPlate: /^[A-Za-z]{3}(| | - |-)\d{4}$/,
		uuid: /^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/,
		md5: /^[a-z0-9]{32}$/,
		sha1: /^[a-z0-9]{40}$/,
		timestampsJs: /^[A-Z][a-z]{2} [A-Z][a-z]{2} (0[1-9]|(1|2)\d|3[01]) (19|20)\d{2} ((0|1)\d|2[0-3])(:[0-5]\d){2} GMT(-|\+)(0\d|1[0-2])(00|30) \((-|\+)(0\d|1[0-2])\)/,
		timestampsNode: /(19|20)\d{2}(-\d{2}){2}T(0[1-9]|1\d|2[0-4])(:(0[1-9]|[1-5]\d)){2}.\d{3}Z/,
		creditCard: /(\d{4}(| )){3}\d{4}/,
		yes: RegExp('(yes|sim|y|s)', 'gi'),
		no: RegExp('(n(a|ã)o|no|n)', 'gi'),
	};
	Object.freeze(regex);
	var tests = {};
	Object.keys(regex).forEach(function(validation) {
		tests[validation] = function(string) {
			var value = string.match(regex[validation]);
			return value === null ? false : value[0] === string;
		};
	});
	return tests;
};
var regex = Regex();
[
	'05fc4e21-7c3b-4ac7-8bc8-4c9b416688fc',
	'586df7ce-ff4e-404e-a52e-d48cc389d2f7',
	'0b789663-b738-4c84-b394-428e4d45c7be',
	'8c6140c5-2064-4dae-9859-50e0f0a29e32',
	'758eee18-4e0b-4734-bb86-e8ab9dd74e3c',
	'b30d8560-ed65-474d-8b36-4a9e9234e131',
	'492e6910-14f9-4010-96c8-d5eea854c688',
	'00e2310b-b39c-4946-bbbd-4f9061ed3b57',
	'521637f3-203a-4e6e-95da-a0beb9f3626f',
	'db695c28-cea3-4d09-9d48-99cbd65a561e',
].forEach((x) => console.log(x + ' ' + regex.uuid(x)));
console.log('4000 1234 5678 9010 ' + regex.creditCard('4000 1234 5678 9010'));
console.log('116.632.837-61 ' + regex.cpf('116.632.837-61'));
console.log('YES ' + regex.yes('YES'));
console.log('Não ' + regex.no('não'));
var timestamps = new Date().toString();
console.log(timestamps + ' ' + regex.timestampsJs(timestamps));
console.log('29-02-1996' + ' ' + regex.dayMonthYearWithMonthValidation('29-02-1996'));
