import { Parser } from './parser';
import { Searcher } from './searcher';

console.log('start parsing:', new Date().toLocaleTimeString());

const parser = new Parser();
const xrefdata = parser.parseDir('c:/usr/xref', 'D:\\wintmp\\build492943069\\devmain\\');

console.log('end parsing:  ', new Date().toLocaleTimeString());


const searcher = new Searcher(xrefdata);

const t1 = Date.now();
const sources = searcher
                .getTableReferences('Klantbes', true, undefined, true)
                .map(table => table.sourcefile);

console.log(sources);

const t2 = Date.now();

console.log('done, elapsed:', ((t2 - t1) / 1000).toFixed(3), 's');
