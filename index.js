// const data = ['apel', 'mangga', 'jeruk']

/* Apakah data ini bertipe array */
Array.apakahArray = function () {
	return Array.isArray(...arguments)
}
// console.log(Array.apakahArray(data))

Array.nya = function () {
	return this.of(...arguments)
}

Array.prototype.panjang = function () {
	return this.length
}
// console.log(data.panjang())

/* .at() */
Array.prototype.pada = function () {
	return this.at(...arguments)
}
// console.log(data.pada(0))

Array.prototype.gabungkan = function () {
	return this.concat(...arguments)
}
// console.log(data.gabungkan('buah', 1, { asdf : 'qwer' }, ['a', 'b', ['c', 'd']]))

Array.prototype.salinDidalam = function () {
	return this.copyWithin(...arguments)
}

Array.prototype.entri = function () {
	return this.entries()
}

Array.prototype.setiap = function () {
	return this.every(...arguments)
}
// console.log([3, 4, 5].every( (currentValue) => currentValue < 40 ) ) /* true */
// console.log([3, 4, 50].every( (currentValue) => currentValue < 40 ) ) /* false */

/* Isi atau timpa */
Array.prototype.timpa = function () {
	return this.fill(...arguments)
}
Array.prototype.isi = function () {
	return this.fill(...arguments)
}
// console.log(data.timpa('anggur', 0, 1)) /* [ 'anggur', 'mangga', 'jeruk' ] */
// console.log(data.isi('anggur', 0, 1)) /* [ 'anggur', 'mangga', 'jeruk' ] */

Array.prototype.saring = function () {
	return this.filter(...arguments)
}
// const tersaring = data.saring( d => d.length === 4)
// console.log(tersaring)

Array.prototype.temukan = function () {
	return this.find(...arguments)
}
// const ditemukan = data.temukan( (d, i, a) => d === 'mangga')
// console.log(ditemukan)

Array.prototype.temukanIndex = function () {
	return this.findIndex(...arguments)
}
// console.log([1, 2, 3, 4].temukanIndex( element => element > 2))

Array.prototype.temukanAkhir = function () {
	return this.findLast(...arguments)
}

Array.prototype.temukanIndexAkhir = function () {
	return this.findLastIndex(...arguments)
}

/* Mendatarkan nested array */
Array.prototype.datarkan = function () {
	return this.flat(...arguments)
}
// console.log(['a', 'b', ['c', 'd', [['e', [[['f']]]]]]].datarkan(6)) /* [ 'a', 'b', 'c', 'd', 'e', 'f' ] */

Array.prototype.petakanDatar = function () {
	return this.flatMap(...arguments)
}

/* .forEach() */
Array.prototype.uraikan = function ( cb ) {
	this.forEach(cb)
}
// data.uraikan( (d, i, a) => {
// 	console.log(d, i, a)
// })

Array.prototype.dari = function () {
	return this.from(...arguments)
}

Array.prototype.kelompok = function () {
	return this.group(...arguments)
}

Array.prototype.kelompokKePemetaan = function () {
	return this.groupToMap(...arguments)
}

Array.prototype.mengandung = function ( item ) {
	return this.includes(item)
}
// const terkandung = data.mengandung('nanas')
// console.log(terkandung)

Array.prototype.indexNya = function () {
	return this.indexOf(...arguments)
}
// console.log(data.indexOf('mangga'))

Array.prototype.sambung = function () {
	return this.join(...arguments)
}
// console.log(data.join())

Array.prototype.kunci = function () {
	return this.keys()
}
// for ( const k of data.kunci() ) {
// 	console.log(k)
// }

Array.prototype.indexTerakhirNya = function () {
	return this.lastIndexOf(...arguments)
}

Array.prototype.petakan = function ( cb ) {
	return this.map(cb)
}
// const dipetakan = data.petakan( d => d + 's')
// console.log(dipetakan)

Array.prototype.ambilAkhir = function () {
	return this.pop()
}
// console.log(data)
// const elementTerakhir = data.ambilAkhir()
// console.log(data, elementTerakhir)

Array.prototype.tambahAkhir = function () {
	return this.push(...arguments)
}
// console.log(data)
// const panjangArray = data.tambahAkhir('anggur')
// console.log(data, panjangArray)

Array.prototype.redamkan = function () {
	return this.reduce(...arguments)
}
// console.log([1, 2, 3].redamkan( (awal, sekarang) => awal + sekarang, 0))

Array.prototype.redamkanKanan = function () {
	return this.reduceRight(...arguments)
}

Array.prototype.balik = function () {
	return this.reverse()
}
// console.log(data.balik())

Array.prototype.ambilAwal = function () {
	return this.shift()
}
// console.log(data)
// const elementPertama = data.ambilAkhir()
// console.log(data, elementPertama)

Array.prototype.iris = function () {
	return this.slice(...arguments)
}
// console.log(data.slice(1))

Array.prototype.urutkan = function () {
	return this.sort()
}
// console.log(data.urutkan())

Array.prototype.sembat = function () {
	return this.splice(...arguments)
}

Array.prototype.jadikanStringLokal = function () {
	return this.toLocaleString(...arguments)
}

Array.prototype.jadikanString = function () {
	return this.toString()
}
// console.log(data.jadikanString())

Array.prototype.tambahAwal = function () {
	return this.unshift(...arguments)
}
// console.log(data)
// const panjangArray = data.unshift('anggur')
// console.log(data, panjangArray)

Array.prototype.nilai = function () {
	return this.values()
}
// for ( v of data.values() ) {
// 	console.log(v)
// }

module.exports = Array
